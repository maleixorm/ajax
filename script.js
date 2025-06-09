function requisitarPagina(url) {
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
        if (ajax.readyState == 4) {
            console.log('Requisição finalizada com sucesso!');
            document.getElementById('loading').remove();
        }
    }
    // console.log(ajax);
    ajax.send();
} 