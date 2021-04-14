let palavrasChave = [
    'fabricante',
    'distribuidor',
]
.toString()
.replace(/,/g, '+');

$("#botao_buscar").click((event) => {

    let linkPesquisa = 'https://www.google.com.br/search?q=';

    var textoBusca = 
        document.querySelector("#conteudo_busca")
        .value
        .replace(/ /g, '+');

    linkPesquisa += palavrasChave+"+";
    linkPesquisa += textoBusca;

    window.open(linkPesquisa);  
});