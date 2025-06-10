function getFilmes() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'filmes.xml');
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let XMLFilmes = xmlHttp.responseText;
            let parser = new DOMParser();
            let domFilmes = parser.parseFromString(XMLFilmes, "text/xml");
            let jsonFilmes = xmlToJson(domFilmes);
            let filme = jsonFilmes['filmes']['filme'];
            for (let i in filme) {
                let lista = document.getElementById('lista');
                let genero = jsonFilmes['filmes']['filme'][i]['genero'];
                let generoFilme = '';
                for (let g in genero) {
                    if (generoFilme) {
                        generoFilme += ', ';
                    }
                    generoFilme += genero[g]['#text'];
                }
                let elenco = jsonFilmes['filmes']['filme'][i]['elenco']['ator'];
                let elencoFilme = '';
                for (let l in elenco) {
                    if (elencoFilme) {
                        elencoFilme += ', ';
                    }
                    elencoFilme += elenco[l]['#text'];
                }
                lista.innerHTML += `
                    <div class="row mt-5">
                        <div class="col">
                            <p><strong>Título:</strong> ${filme[i]['titulo']['#text']}</p>
                            <p><strong>Resumo:</strong> ${filme[i]['resumo']['#text']}</p>
                            <p><strong>Gênero:</strong> ${generoFilme}</p>
                            <p><strong>Elenco:</strong> ${elencoFilme}</p>
                            <p><strong>País de lançamento:</strong> ${filme[i]['dataLancamento']['@attributes']['pais']}</p>
                            <p><strong>Data de lançamento:</strong> ${filme[i]['dataLancamento']['#text']}</p>
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