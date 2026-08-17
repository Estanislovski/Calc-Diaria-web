console.log("JS Conectado")

const diarias = {
  "prefeito": {
    "100": 280,
    "250": 375,
    "600": 800,
    "5000": 1000,
    capitalFederal: 1250
  },
  "secretario": {
    "100": 225.00,
    "250": 350.00,
    "600": 650.00,
    "5000": 800.00,
    capitalFederal: 1150.00
  },
  "servidor": {
    "100": 200.00,
    "250": 280.00,
    "600": 450.00,
    "5000": 650.00,
    capitalFederal: 950.00
  }
};

const checkbox = document.getElementById("capitalfederal");

checkbox.addEventListener("change", (event) => {
  const dst = document.getElementById("distancia")
  if (event.target.checked) {
    dst.disabled = true;
  } else {
    dst.disabled = false;
  }
})

function limpar() {
  document.getElementById("saida").value = "";
  document.getElementById("retorno").value = "";
  document.getElementById("cargo").value = "";
  document.getElementById("distancia").value = "";
  document.getElementById("capitalfederal").checked = false;
}

function gravar() {
  let saida = new Date(document.getElementById("saida").value);
  let retorno = new Date(document.getElementById("retorno").value);
  let cargo = document.getElementById("cargo").value;
  let distancia = document.getElementById("distancia").value;
  let capitalfederal = document.getElementById("capitalfederal");
  let cargocompleto = "verificar"

  //validação de preenchimento dos campos
  if (saida == "") {
    alert("Informe a data e hora de saída!");
    return;
  }
  if (retorno == "") {
    alert("Informe a data e hora de retorno!");
    return;
  }
  if (cargo == "") {
    alert("Selecione um cargo!");
    return;
  }
  if (distancia == "" && capitalfederal.checked == false) {
    alert("Informe a distancia até o destino!");
    return;
  }

  let distanciaCargo = diarias[cargo]

  let valor = 0
  if (capitalfederal.checked == true) {
    valor = distanciaCargo.capitalFederal
    //console.log("if")
  } else {
    //console.log("else")
    for (const chave of Object.keys(distanciaCargo)) {
      if (parseInt(distancia, 10) <= parseInt(chave, 10)) {
        console.log("Distância calculada", distanciaCargo[chave], distancia)
        valor = distanciaCargo[chave]
        break
      }
    }
  }

  //calcular o total de diarias
  let horas = (retorno - saida) / 3600000
  //console.log(horas)

  //converter horas em dias e armazenar horas restantes
  let dias = Math.floor(horas / 24)
  horas -= (dias * 24)
  //console.log(horas)

  if (horas >= 12){
    //console.log("1")
    dias += 1;
  }else if (horas >= 4){
    //console.log("0,5")
    dias += 0.5;
  }

  //completar os nomes para apresentação ao úsuario
  if (cargo == "prefeito") {
    cargocompleto = "Prefeito e Vice-Prefeito"
  } else if (cargo == "secretario") {
    cargocompleto = "Secretários Municipais, Procurador-Geral e Presidente de Autarquia ou Fundação"
  } else {
    cargocompleto == "Cargos em comissão, Servidores e/ou empregados públicos"
  }

  document.getElementById("resultados").style.display = "block";
  document.getElementById("tituloResultado").style.color = "blue";
  document.getElementById("resultadoSaida").textContent = saida.toLocaleString("pt-BR");
  document.getElementById("resultadoRetorno").textContent = retorno.toLocaleString ("pt-BR");
  document.getElementById("resultadoCargo").textContent = cargocompleto;
  document.getElementById("totalDiarias").textContent = dias;
  document.getElementById("valorDiaria").textContent = valor;
  document.getElementById("valorTotal").textContent = dias * valor;

}