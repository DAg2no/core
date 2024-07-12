let isLoggedIn = false;

document.getElementById('loginButton').addEventListener('click', function() {
    if (isLoggedIn) {
        this.textContent = 'Iniciar sesión';
        isLoggedIn = false;
    } else {
        this.textContent = 'Cerrar sesión';
        isLoggedIn = true;
    }
});

document.getElementById('addDefinitionButton').addEventListener('click', function() {
    this.style.display = 'none';
});



function contadordeLikes (button, definicion){
    const contadorElemento = button.querySelector('.contadorElement');
    let likeCount = parseInt(contadorElemento.textContent);
    likeCount++;
    contadorElemento.textContent = likeCount;
    window.alert(definicion);
}

