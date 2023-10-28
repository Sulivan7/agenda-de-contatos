const form = document.getElementById("form-agenda");
const contato = [];
const numero = [];
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  addLinha();
  atualizaTable();
});

function addLinha() {
  const inputContatoAgenda = document.getElementById("contato-agenda");
  const inputNumContato = document.getElementById("num-contato");

  if (contato.includes(inputContatoAgenda.value)) {
    alert(
      `Esse Contato : <strong> ${inputContatoAgenda.value} </strong> Ja foi inserido`
    );
  } else {
    contato.push(inputContatoAgenda.value);
    numero.push(parseFloat(inputNumContato.value));
    let linha = "<tr>";
    linha += `<td>${inputContatoAgenda.value}</td>`;
    linha += `<td>${inputNumContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  inputContatoAgenda.value = "";
  inputNumContato.value = "";
}

function atualizaTable() {
  const corpoTable = document.querySelector("tbody");
  corpoTable.innerHTML = linhas;
}
