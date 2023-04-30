function sorteia() {
      return Math.round(Math.random() * 15);
  };

  function sorteiaNumeros(quantidade) {
      var segredos = [];
      var numero = 1;

      while(numero <= quantidade) {

        var numeroAleatorio = sorteia();

        if(numeroAleatorio !== 0) {

          var achou = false;
  
          for(var posicao = 0; posicao < segredos.length; posicao++) {
  
            if(segredos[posicao] == numeroAleatorio) {
              achou = true;
              break;
            };
          };
  
          if(achou == false) {
             segredos.push(numeroAleatorio);
             numero++;
          };
        };
      };

      return segredos;
  };
  
    var segredos = sorteiaNumeros(3);
    console.log(segredos)
    var input = document.querySelector("input");
        input.focus();

  function verifica(){
    var achou = false;

    for(posicao = 0;posicao < segredos.length; posicao++){
      if (input.value == segredos[posicao]){
        alert("Você acertou, Parabéns!");
        achou = true;
        window.location.reload();
        break;
      };
    };

    if (achou == false) {
      alert("Você errou, tente outra vez!");
    };

    input.value = "";
    input.focus();
  };
  var button = document.querySelector("button");
  button.onclick = verifica;

