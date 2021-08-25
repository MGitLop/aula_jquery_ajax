function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    $.ajax({
        url:url,
        type: "GET",
        success: function(response){
            console.log(response);
         // alert(response.logradouro);
         // $("#logradouro").html(response.logradouro); //outra forma de fazer a associação com o html usando o JQuery
         // document.getElementById("logradouro").innerHTML = response.logradouro; 
         // document.getElementById("bairro").innerHTML = response.bairro; 
         // document.getElementById("localidade").innerHTML = response.localidade; 
         // document.getElementById("uf").innerHTML = response.uf; 
         // document.getElementById("ibge").innerHTML = response.ibge; 
          $("#logradouro").html(response.logradouro);
          $("#bairro").html(response.bairro);
          $("#localidade").html(response.localidade);
          $("#uf").html(response.uf);
          $("#titulo_cep").html("CEP " + response.cep);
          $(".cep").show();
        }
    })
}

$(function(){
    $(".cep").hide(); //esconde a div inteira do cep
})
