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
  let saida = document.getElementById("saida").value;
  let retorno = document.getElementById("retorno").value;
  let cargo = document.getElementById("cargo").value;
  let distancia = document.getElementById("distancia").value;
  let capitalfederal = document.getElementById("capitalfederal");
  let cargocompleto = "verificar"
  let dsaida = new Date(saida)
  let dretorno = new Date(retorno)

  //validação de preenchimento dos campos
  if (saida == "") {
    alert("Informe a data e hora de saída!");
    return;
  }
  if (retorno == "") {
    alert("Informe a data e hora de retorno!");
    return;
  }
  if (retorno <= saida) {
    alert("Data de Retorno menor ou igual a Saída!");
    return;
  }
  if (cargo == "") {
    alert("Selecione um cargo!");
    return;
  }
  if (capitalfederal.checked == true) {

  } else if (distancia == "") {
    alert("Informe a distancia até o destino!");
    return;
  } else if (distancia <= 0) {
    alert("Distancia da viagem não pode ser inferior a 1km!");
    return;
  } else if (distancia > 5000) {
    alert("Distancia informada não pode ser maior que 5000km!")
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
  let horas = (dretorno - dsaida) / 3600000
  //console.log(horas)

  //converter horas em dias e armazenar horas restantes
  let dias = Math.floor(horas / 24)
  horas -= (dias * 24)
  //console.log(horas)

  if (horas >= 12) {
    //console.log("1")
    dias += 1;
  } else if (horas >= 4) {
    //console.log("0,5")
    dias += 0.5;
  }
  console.log(cargo);
  //completar os nomes para apresentação ao úsuario
  if (cargo == "prefeito") {
    cargocompleto = "Prefeito e Vice-Prefeito";
  } else if (cargo == "secretario") {
    cargocompleto = "Secretários Municipais, Procurador-Geral e Presidente de Autarquia ou Fundação";
  } else {
    cargocompleto = "Cargos em comissão, Servidores e/ou empregados públicos";
  }

  document.getElementById("resultados").style.display = "block";
  document.getElementById("resultadoSaida").textContent = dsaida.toLocaleString("pt-BR");
  document.getElementById("resultadoRetorno").textContent = dretorno.toLocaleString("pt-BR");
  document.getElementById("resultadoCargo").textContent = cargocompleto;
  document.getElementById("totalDiarias").textContent = dias;
  document.getElementById("valorDiaria").textContent = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  document.getElementById("valorTotal").textContent = (dias * valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

}
