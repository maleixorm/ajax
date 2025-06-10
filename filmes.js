function getFilmes() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'http://localhost/ajax/filmes.xml');
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let XMLFilmes = xmlHttp.responseText;
            console.log(XMLFilmes);
            let parser = new DOMParser();
            let domFilmes = parser.parseFromString(XMLFilmes, "text/xml");
            console.log(domFilmes);
            let jsonFilmes = xmlToJson(domFilmes);
            console.log(jsonFilmes);
        }
        
        if (xmlHttp.readyState == 4 && xmlHttp.status == 404) {
            
        }
    }
    xmlHttp.send();
}