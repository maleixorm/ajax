function requisitarPagina(url) {
    document.getElementById('conteudo').innerHTML = '';
    
    if (!document.getElementById('loading')) {
        let imgLoading = document.createElement('img');
        imgLoading.id = 'loading';
        imgLoading.src = 'loading.gif';
        imgLoading.className = 'rounded mx-auto d-block';
        document.getElementById('conteudo').appendChild(imgLoading);
    }
    
    let ajax = new XMLHttpRequest();
    
    ajax.open('GET', url);
    
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.getElementById('conteudo').innerHTML = ajax.responseText;
        }

        if (ajax.readyState == 4 && ajax.status == 404) {
            document.getElementById('conteudo').innerHTML = `<br><br><div class="panel panel-default"><div class="panel-body"><p>Requisição finalizada com erro! O recurso requisitado não foi encontrado! Status da requisição: ${ajax.status}</p></div></div>`;
        }
    }
    ajax.send();
} 