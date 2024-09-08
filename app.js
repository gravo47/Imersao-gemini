function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
      // Constrói o HTML para cada item do resultado da pesquisa, formatando os dados do objeto
      resultados += `
        <div class="item-resultado">
          <h2>${dado.nome}, ${dado.local}</h2> <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Clique para mais informações sobre a Praia do Sancho</a> </div>
      `;
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }