function converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);
    var valorEmReal = valorEmDolar * 5;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Real é " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
    console.log(valorEmReal);
    
    
  }