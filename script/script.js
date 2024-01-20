const campoCaracter = document.getElementById("icaracteres");

const contador = document.getElementById("icontador");

campoCaracter.addEventListener("input", function(){

    contador.textContent = campoCaracter.value.length;
    
});
