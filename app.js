function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa.trim()) {
    section.innerHTML = "<p>Nada foi encontrado.Você precisa digitar o nome da doença infantil neurológica.</p>"   
    return 
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {  
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();  
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
            {
        
             // Cria uma nova div para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                <a href="#" target="_blank" text-align: center>${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"> Mais informações</a>
            </div>`;
        }
    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
       

    // Atribui os resultados formatados ao conteúdo da seção
    section.innerHTML = resultados
}