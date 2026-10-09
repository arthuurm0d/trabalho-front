let tarefas = [];
let proximoId = 1;

const formulario = document.getElementById("form-tarefa");
const campoTarefa = document.getElementById("campo-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

function adicionarTarefa(texto) {
  const novaTarefa = {
    id: proximoId,
    texto: texto,
    concluida: false
  };

  tarefas.push(novaTarefa);
  proximoId++;
}

function alternarConclusao(id) {
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].id === id) {
      tarefas[i].concluida = !tarefas[i].concluida;
    }
  }
}

function removerTarefa(id) {
  tarefas = tarefas.filter(function (tarefa) {
    return tarefa.id !== id;
  });
}

function renderizarTarefas() {
  listaTarefas.textContent = "";

  tarefas.forEach(function (tarefa) {
    const item = document.createElement("li");

    if (tarefa.concluida) {
      item.classList.add("concluida");
    }

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = tarefa.texto;

    const botaoConcluir = document.createElement("button");
    if (tarefa.concluida) {
      botaoConcluir.textContent = "Desfazer";
    } else {
      botaoConcluir.textContent = "Concluir";
    }

    botaoConcluir.addEventListener("click", function () {
      alternarConclusao(tarefa.id);
      renderizarTarefas();
    });

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("botao-remover");

    botaoRemover.addEventListener("click", function () {
      removerTarefa(tarefa.id);
      renderizarTarefas();
    });

    item.appendChild(textoTarefa);
    item.appendChild(botaoConcluir);
    item.appendChild(botaoRemover);
    listaTarefas.appendChild(item);
  });
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = campoTarefa.value.trim();

  if (texto === "") {
    return;
  }

  adicionarTarefa(texto);
  renderizarTarefas();

  campoTarefa.value = "";
  campoTarefa.focus();
});