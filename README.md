# 🧮 Calculadora de Diárias

Aplicação web simples que calcula automaticamente o valor de diárias de viagem a serviço, considerando o **cargo do servidor**, o **tempo de duração da viagem** e o **destino**.

Feita em HTML, CSS e JavaScript puro, sem dependências ou build step — basta abrir o `index.html` no navegador.

## ✨ Funcionalidades

- Cálculo automático do número de diárias com base na data/hora de saída e retorno;
- Regra de fração de diária: viagens com 12h ou mais de excedente somam 1 diária inteira, entre 4h e 12h somam meia diária, abaixo de 4h não somam nada;
- Valor da diária definido conforme o **cargo** selecionado e a **distância** percorrida (em faixas de km);
- Opção de marcar viagem para **Brasília (Capital Federal)**, que aplica um valor fixo e desabilita o campo de distância;
- Validação dos campos obrigatórios antes de calcular;
- Botão para limpar o formulário e iniciar um novo cálculo;
- Exibição do resumo com data de saída, retorno, cargo, total de diárias, valor unitário e valor total (formatado em R$).

## 🖥️ Como usar

1. Acesse o `index.html` (localmente ou via GitHub Pages, se publicado);
2. Informe a **data e hora de saída** e de **retorno**;
3. Selecione o **cargo** do servidor;
4. Informe a **distância da viagem** em km — ou marque a opção **Capital Federal**, se for o destino;
5. Clique em **Calcular** para ver o resultado, ou em **Limpar** para reiniciar o formulário.

## 📊 Regras de cálculo

### Cargos e faixas de distância

Os valores de diária variam conforme o cargo e a faixa de distância percorrida (até 100 km, até 250 km, até 600 km, até 5.000 km) ou, alternativamente, um valor fixo para viagens à Capital Federal:

| Cargo | Até 100 km | Até 250 km | Até 600 km | Até 5.000 km | Capital Federal |
|---|---|---|---|---|---|
| Prefeito e Vice-Prefeito | R$ 280,00 | R$ 375,00 | R$ 800,00 | R$ 1.000,00 | R$ 1.250,00 |
| Secretários Municipais, Procurador-Geral e Presidente de Autarquia ou Fundação | R$ 225,00 | R$ 350,00 | R$ 650,00 | R$ 800,00 | R$ 1.150,00 |
| Cargos em comissão, Servidores e/ou empregados públicos | R$ 200,00 | R$ 280,00 | R$ 450,00 | R$ 650,00 | R$ 950,00 |

> ⚠️ Os valores acima estão definidos diretamente no código (`script.js`) e podem ser ajustados conforme a legislação/tabela vigente do órgão.

### Total de diárias

O tempo total da viagem é convertido em dias completos + fração, seguindo a regra:

- Horas excedentes **≥ 12h** → soma **1 diária**;
- Horas excedentes **≥ 4h e < 12h** → soma **0,5 diária**;
- Horas excedentes **< 4h** → não soma diária adicional.

**Valor total = número de diárias × valor da diária conforme cargo/distância.**

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript** (vanilla, sem frameworks ou bibliotecas)

## 📁 Estrutura do projeto

```
Calc-Diaria-web/
├── index.html    # Estrutura e formulário da aplicação
├── script.js     # Lógica de cálculo das diárias
├── style.css     # Estilização da página
└── LICENSE       # Licença MIT
```

## 🚀 Rodando localmente

Não há dependências para instalar. Basta clonar o repositório e abrir o arquivo `index.html` no navegador:

```bash
git clone https://github.com/Estanislovski/Calc-Diaria-web.git
cd Calc-Diaria-web
```

Depois é só abrir o `index.html` (duplo clique ou usando uma extensão como o Live Server no VS Code).

## 📌 Observações

- Os valores de diária estão fixos no código-fonte (`script.js`) e não são configuráveis pela interface — para atualizar os valores, é necessário editar o objeto `diarias` diretamente.
- O menu de navegação para outras páginas (cadastro de valores, cálculo de combustível) existe no HTML mas está comentado, indicando funcionalidades futuras/planejadas.

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

## 👤 Autor

Desenvolvido por **[Paulo Estanislovski](https://github.com/Estanislovski)**.