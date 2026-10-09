const CHAVE_STORAGE = "trabalho-tarefas";
const TEMPO_REMOVER = 250;
const TEMPO_FEEDBACK = 2500;

let tarefas = [];
let proximoId = 1;
let filtroAtual = "todas";
let idUltimaTarefaAdicionada = null;
let temporizadorFeedback = null;

const formulario = document.getElementById("form-tarefa");
const campoTarefa = document.getElementById("campo-tarefa");
const mensagemErro = document.getElementById("mensagem-erro");
const mensagemFeedback = document.getElementById("mensagem-feedback");
const mensagemVazia = document.getElementById("mensagem-vazia");
const listaTarefas = document.getElementById("lista-tarefas");
const contadorTotal = document.getElementById("contador-total");
const contadorPendentes = document.getElementById("contador-pendentes");
const contadorConcluidas = document.getElementById("contador-concluidas");
const botoesFiltro = document.querySelectorAll(".botao-filtro");

function salvarTarefas() {
  try {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(tarefas));
  } catch (erro) {
    console.error("Não foi possível salvar as tarefas.", erro);
  }
}

function carregarTarefas() {
  try {
    const salvo = localStorage.getItem(CHAVE_STORAGE);

    if (salvo === null) {
      return;
    }

    const lista = JSON.parse(salvo);

    if (!Array.isArray(lista)) {
      return;
    }

    tarefas = lista.filter(function (tarefa) {
      return (
        typeof tarefa.id === "number" &&
        typeof tarefa.texto === "string" &&
        typeof tarefa.concluida === "boolean"
      );
    });
  } catch (erro) {
    tarefas = [];
  }

  tarefas.forEach(function (tarefa) {
    if (tarefa.id >= proximoId) {
      proximoId = tarefa.id + 1;
    }
  });
}

function adicionarTarefa(texto) {
  const novaTarefa = {
    id: proximoId,
    texto: texto,
    concluida: false
  };

  tarefas.push(novaTarefa);
  proximoId++;

  return novaTarefa.id;
}

function alternarConclusao(id) {
  let novoEstado = false;

  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].id === id) {
      tarefas[i].concluida = !tarefas[i].concluida;
      novoEstado = tarefas[i].concluida;
    }
  }

  return novoEstado;
}

function removerTarefa(id) {
  tarefas = tarefas.filter(function (tarefa) {
    return tarefa.id !== id;
  });
}

function obterTarefasFiltradas() {
  if (filtroAtual === "pendentes") {
    return tarefas.filter(function (tarefa) {
      return !tarefa.concluida;
    });
  }

  if (filtroAtual === "concluidas") {
    return tarefas.filter(function (tarefa) {
      return tarefa.concluida;
    });
  }

  return tarefas;
}

function contarTarefas() {
  let concluidas = 0;

  tarefas.forEach(function (tarefa) {
    if (tarefa.concluida) {
      concluidas++;
    }
  });

  return {
    total: tarefas.length,
    concluidas: concluidas,
    pendentes: tarefas.length - concluidas
  };
}

function obterTextoVazio() {
  if (tarefas.length === 0) {
    return "Você ainda não tem tarefas. Adicione a primeira acima!";
  }

  if (filtroAtual === "pendentes") {
    return "Nenhuma tarefa pendente. Bom trabalho!";
  }

  return "Nenhuma tarefa concluída ainda.";
}

function mostrarErro(texto) {
  mensagemErro.textContent = texto;
  campoTarefa.classList.add("invalido");
  campoTarefa.setAttribute("aria-invalid", "true");
}

function limparErro() {
  mensagemErro.textContent = "";
  campoTarefa.classList.remove("invalido");
  campoTarefa.removeAttribute("aria-invalid");
}

function mostrarFeedback(texto, tipo) {
  clearTimeout(temporizadorFeedback);

  mensagemFeedback.textContent = texto;
  mensagemFeedback.className = "mensagem-feedback visivel " + tipo;

  temporizadorFeedback = setTimeout(function () {
    mensagemFeedback.className = "mensagem-feedback";
  }, TEMPO_FEEDBACK);
}

function atualizarContadores() {
  const contagem = contarTarefas();

  contadorTotal.textContent = contagem.total;
  contadorPendentes.textContent = contagem.pendentes;
  contadorConcluidas.textContent = contagem.concluidas;
}

function atualizarFiltros() {
  botoesFiltro.forEach(function (botao) {
    if (botao.dataset.filtro === filtroAtual) {
      botao.setAttribute("aria-pressed", "true");
    } else {
      botao.setAttribute("aria-pressed", "false");
    }
  });
}

function criarItemTarefa(tarefa) {
  const item = document.createElement("li");
  item.classList.add("tarefa");

  if (tarefa.concluida) {
    item.classList.add("concluida");
  }

  if (tarefa.id === idUltimaTarefaAdicionada) {
    item.classList.add("nova");
    idUltimaTarefaAdicionada = null;
  }

  const textoTarefa = document.createElement("span");
  textoTarefa.classList.add("texto-tarefa");
  textoTarefa.textContent = tarefa.texto;

  const acoes = document.createElement("div");
  acoes.classList.add("acoes");

  const botaoConcluir = document.createElement("button");
  botaoConcluir.type = "button";
  botaoConcluir.classList.add("botao", "botao-concluir");

  if (tarefa.concluida) {
    botaoConcluir.textContent = "Desfazer";
    botaoConcluir.setAttribute("aria-label", "Desfazer conclusão da tarefa: " + tarefa.texto);
  } else {
    botaoConcluir.textContent = "Concluir";
    botaoConcluir.setAttribute("aria-label", "Concluir tarefa: " + tarefa.texto);
  }

  botaoConcluir.addEventListener("click", function () {
    const ficouConcluida = alternarConclusao(tarefa.id);
    salvarTarefas();
    renderizarTarefas();

    if (ficouConcluida) {
      mostrarFeedback("Tarefa concluída!", "sucesso");
    } else {
      mostrarFeedback("Tarefa voltou para pendente.", "aviso");
    }
  });

  const botaoRemover = document.createElement("button");
  botaoRemover.type = "button";
  botaoRemover.classList.add("botao", "botao-remover");
  botaoRemover.textContent = "Remover";
  botaoRemover.setAttribute("aria-label", "Remover tarefa: " + tarefa.texto);

  botaoRemover.addEventListener("click", function () {
    botaoRemover.disabled = true;
    item.classList.add("removendo");

    setTimeout(function () {
      removerTarefa(tarefa.id);
      salvarTarefas();
      renderizarTarefas();
      mostrarFeedback("Tarefa removida.", "aviso");
    }, TEMPO_REMOVER);
  });

  acoes.appendChild(botaoConcluir);
  acoes.appendChild(botaoRemover);
  item.appendChild(textoTarefa);
  item.appendChild(acoes);

  return item;
}

function renderizarTarefas() {
  const tarefasVisiveis = obterTarefasFiltradas();

  listaTarefas.textContent = "";

  tarefasVisiveis.forEach(function (tarefa) {
    listaTarefas.appendChild(criarItemTarefa(tarefa));
  });

  if (tarefasVisiveis.length === 0) {
    mensagemVazia.textContent = obterTextoVazio();
    mensagemVazia.hidden = false;
  } else {
    mensagemVazia.hidden = true;
  }

  atualizarContadores();
  atualizarFiltros();
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = campoTarefa.value.trim();

  if (texto === "") {
    mostrarErro("Digite uma tarefa antes de adicionar.");
    campoTarefa.focus();
    return;
  }

  limparErro();

  idUltimaTarefaAdicionada = adicionarTarefa(texto);
  filtroAtual = "todas";

  salvarTarefas();
  renderizarTarefas();
  mostrarFeedback("Tarefa adicionada!", "sucesso");

  campoTarefa.value = "";
  campoTarefa.focus();
});

campoTarefa.addEventListener("input", limparErro);

botoesFiltro.forEach(function (botao) {
  botao.addEventListener("click", function () {
    filtroAtual = botao.dataset.filtro;
    renderizarTarefas();
  });
});

carregarTarefas();
renderizarTarefas();