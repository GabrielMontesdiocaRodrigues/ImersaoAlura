/**
 * Realiza a pesquisa e exibe os resultados na página.
 */
function pesquisar () {

    let campoPesquisa = document.getElementById("campoPesquisa").value

    if (!campoPesquisa){
        adiciona_atletas(campoPesquisa.toLowerCase()) 
    }
    
}

/**
 * Cria a estrutura HTML para um item da lista de resultados.
 * @param {Object} atleta - Objeto contendo os dados do atleta.
 * @returns {string} - String com a estrutura HTML.
 */
function adiciona_dados_atleta(atleta) {

    return `
    <div class="item-resultado">
        <h2>
            <a target="_blank" href="${atleta.link}">${atleta.nome}</a>
        </h2>      
        <p class="descricao-meta">${atleta.descricao}</p>           
    </div> `
    
}
function adiciona_atletas(campoPesquisa){
    let section = document.getElementById("resultados-pesquisa");
    let resultados = ""

    for (let atleta of atletas) {
        let titulo = atleta.nome.toLowerCase()
        let descricao = atleta.descricao.toLowerCase()
        let tags = atleta.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += adiciona_dados_atleta(atleta)
        }
    }

    if (!resultados){ 
        resultados = `<p>Nada foi encontrado</p>`
    }

    section.innerHTML = resultados
}
