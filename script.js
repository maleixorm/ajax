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
    // console.log(ajax.readyState);
    
    ajax.open('GET', url);
    // console.log(ajax.readyState);
    
    ajax.onreadystatechange = () => {
        if (ajax.readyState == 4 && ajax.status == 200) {
            document.getElementById('conteudo').innerHTML = `Requisição finalizada com sucesso! Status da requisição: ${ajax.status}`;
            // document.getElementById('loading').remove();
        }

        if (ajax.readyState == 4 && ajax.status == 404) {
            document.getElementById('conteudo').innerHTML = `Requisição finalizada com erro! O recurso requisitado não foi encontrado! Status da requisição: ${ajax.status}`;
            // document.getElementById('loading').remove();
        }
    }
    // console.log(ajax);
    ajax.send();
} 