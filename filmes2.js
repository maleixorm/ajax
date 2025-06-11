function getFilmes() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'filmes.json');
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let JSONFilmes = xmlHttp.responseText;
            let objJsonFilmes = JSON.parse(JSONFilmes);
            console.log(objJsonFilmes);

            for (let i in objJsonFilmes.filmes) {
                let item = objJsonFilmes.filmes[i];
                console.log(item);
                let lista = document.getElementById('lista');
                let genero = '';
                for(let g in item.generos) {
                    if (genero) {
                        genero += ', ';
                    }
                    genero += item.generos[g].genero;
                }
                let ator = '';
                for(let g in item.elenco) {
                    if (ator) {
                        ator += ', ';
                    }
                    ator += item.elenco[g].ator;
                }
                lista.innerHTML += `
                    <div class="row mt-5">
                        <div class="col">
                            <p><strong>Título:</strong> ${item.titulo}</p>
                            <p><strong>Resumo:</strong> ${item.resumo}</p>
                            <p><strong>Gênero:</strong> ${genero}</p>
                            <p><strong>Elenco:</strong> ${ator}</p>
                            <p><strong>País de lançamento:</strong> ${item.dataLancamento.pais}</p>
                            <p><strong>Data de lançamento:</strong> ${item.dataLancamento.data}</p>
                            <hr>
                        </div>
                    </div>
                `;
            }
        }
        
        if (xmlHttp.readyState == 4 && xmlHttp.status == 404) {
            
        }
    }
    xmlHttp.send();
}