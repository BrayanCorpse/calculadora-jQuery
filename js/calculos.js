$(document).ready(function(){

    

    function trunc (x, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
    
    //Declaramos variables
    var operandoa;
    
    var operacion;
    
    var operaciop;
    
    var operandob;
    
    var operandoc;
    
    var res;
    
    var numeros;
    
    var borrar;
    
    var igual;
    
          }    
        
      function limpiar(){
      $("#cifra").val("");
      $('#cifra').attr("placeholder", null);
      
    
      
      };
    
      function reset(){
      operandoa = 0;
        operandob = 0;
        operacion = "";
      operacionp = "";
      console.clear();  
      };
    
      $("#apagar").click(function() {
      reset();
      $('#cifra').attr("readonly", true);
      $('#cifra').attr("placeholder", null);
      $('#cifra').val("");
      $("#punto").attr("disabled", false);
      $(".btn-lg").attr("disabled", true);
      $("#erase").attr("disabled", true);
      $("#clean").attr("disabled", true);
      $(".btn-primary").attr("disabled", false);
      $("#cifra").removeClass('color');
      $("#memory").html("");
    
    
    
    
      });
    
      $("#encender").click(function() {
      $('#cifra').attr("readonly", false);
      $('#cifra').attr("placeholder", "Calculator...");
      $(".btn-lg").attr("disabled", false);
      $("#erase").attr("disabled", false);
      $("#clean").attr("disabled", false);
     
    
    
      
    
      });
    
      
       $("#erase").click(function() {
       reset();
       $("#cifra").val("");
       $("#punto").attr("disabled", false);
       $("#porcentaje").attr("disabled", false);
       $("#division").attr("disabled", false);
       $("#cifra").removeClass('color');
       $("#memory").html("");
       $(".btn-outline-dark").attr("disabled", false);
       
        
      });
    
      $("#clean").click(function() {  
       borrar = borrar.slice(0,-1);
       console.log(borrar);
       $("#cifra").val(borrar);
       $("#cifra").removeClass('color');
       $("#memory").html("");
          
      });
    
      $("#siete").click(function(e) {
      var siete = document.getElementById('siete');
      var cifra = document.getElementById('cifra');
      cifra.value +=  this.value;
      borrar = $("#cifra").val();
      console.log(borrar);
      
      });
    
      $("#ocho").click(function(e) {
      var ocho = document.getElementById('ocho');
      var cifra = document.getElementById('cifra');
      cifra.value +=  this.value;
      borrar = $("#cifra").val();
      console.log(borrar);
      });
    
      $("#nueve").click(function(e) {
      var nueve = document.getElementById('nueve');
      var cifra = document.getElementById('cifra');
      cifra.value +=  this.value;
      borrar = $("#cifra").val();
      console.log(borrar);
      });
    
      $("#seis").click(function(e) {
      var seis = document.getElementById('seis');
      var cifra = document.getElementById('cifra');
      cifra.value +=  this.value;
      borrar = $("#cifra").val();
      console.log(borrar);
      });
    
      $("#cinco").click(function(e) {
      var cinco = document.getElementById('cinco');
      var cifra = document.getElementById('cifra');
      cifra.value +=  this.value;
      borrar = $("#cifra").val();
      console.log(borrar);
      });
    
      $("#cuatro").click(function(e) {
      var cuatro = document.getElementById('cuatro');
      var cifra = document.getElementById('cifra');
      cifra.value +=  this.value;
      borrar = $("#cifra").val();
      console.log(borrar);
      });
    
      $("#tres").click(function(e) {
      var tres = document.getElementById('tres');
      var cifra = document.getElementById('cifra');
      cifra.value +=  this.value;
      borrar = $("#cifra").val();
      console.log(borrar);
      });
    
      $("#dos").click(function(e) {
      var dos = document.getElementById('dos');
      var cifra = document.getElementById('cifra');
      cifra.value +=  this.value;
      borrar = $("#cifra").val();
      console.log(borrar);
      });
    
      $("#uno").click(function(e) {
      var uno = document.getElementById('uno');
      var cifra = document.getElementById('cifra');
      cifra.value +=  this.value;
      borrar = $("#cifra").val();
      console.log(borrar);
      });
    
      $("#cero").click(function(e) {
      var cero = document.getElementById('cero');
      var cifra = document.getElementById('cifra');
      cifra.value +=  this.value;
      borrar = $("#cifra").val();
      console.log(borrar);
      });
    
      $("#punto").click(function() {
      var punto = document.getElementById('punto');
      var cifra = document.getElementById('cifra');
      cifra.value +=  this.value;
      $("#cifra").removeClass('color');
      });
    
      $("#porcentaje").click(function() {
      // operandoa = parseFloat($("#cifra").val());
       operacionp = "%";
      // $("#cifra").val(operacion);
      // limpiar();
      // console.log(operandoa);
      // console.log(operacion);
      operandoc = parseFloat($("#cifra").val());
        por();
      $("#porcentaje").attr("disabled", true);
      $("#division").attr("disabled", false);
      $("#suma").attr("disabled", false);
      $("#resta").attr("disabled", false);
      $("#x").attr("disabled", false);
      $("#cifra").removeClass('color');
      });
    
      $("#division").click(function() {
      operandoa = parseFloat($("#cifra").val());
      operacion = "÷";
      $("#cifra").val(operacion);
      limpiar();
      console.log(operandoa);
      console.log(operacion);
      
      $("#division").attr("disabled", true);
      $("#porcentaje").attr("disabled", false);
      $("#suma").attr("disabled", false);
      $("#resta").attr("disabled", false);
      $("#x").attr("disabled", false);
      $("#cifra").removeClass('color');
      });
    
      $("#suma").click(function() {
      operandoa = parseFloat($("#cifra").val());
      operacion = "+";
      $("#cifra").val(operacion);
      limpiar();
      console.log(operandoa);
      console.log(operacion);
    
      $("#suma").attr("disabled", true);
      $("#division").attr("disabled", false);
      $("#porcentaje").attr("disabled", false);
      $("#resta").attr("disabled", false);
      $("#x").attr("disabled", false);
      $("#cifra").removeClass('color');
      });
    
      $("#resta").click(function() {
      operandoa = parseFloat($("#cifra").val());
      operacion = "-";
      $("#cifra").val(operacion);
      limpiar();
      console.log(operandoa);
      console.log(operacion);
    
      $("#resta").attr("disabled", true);
      $("#division").attr("disabled", false);
      $("#porcentaje").attr("disabled", false);
      $("#suma").attr("disabled", false);
      $("#x").attr("disabled", false);
      $("#cifra").removeClass('color');
      });
    
      $("#x").click(function() { 
      operandoa = parseFloat($("#cifra").val());
      operacion = "x";
      $("#cifra").val(operacion);
      limpiar();
      console.log(operandoa);
      console.log(operacion);
    
      $("#cifra").val("")
      $("#x").attr("disabled", true);
      $("#division").attr("disabled", false);
      $("#porcentaje").attr("disabled", false);
      $("#suma").attr("disabled", false);
      $("#resta").attr("disabled", false);
      $("#cifra").removeClass('color');
      });
    
     
      $("#igual").click(function(e){
      operandob = parseFloat($("#cifra").val());
      igual = "=";
      operacionp = "";
      console.log(operandob);
      console.log(igual);
      
      var value;
      value = $("#cifra").val();
    
      if( value == "" || operandob == null || value == "Sintax Error"){
      
      $("#cifra").val("Sintax Error");
    
      }
      else if( operacionp == "%")
      {
      porcent();
      $(".btn-outline-dark").attr("disabled", false);
     
      }
      else
      {
        resolver();
        $(".btn-outline-dark").attr("disabled", false);
      }
     
      
    
    
    });
    
    
    function resolver(){
      var res = 0;
      // var porcent = 100;
      switch(operacion){
        case "+":
          res = parseFloat(operandoa) + parseFloat(operandob);
          break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "x":
          res = parseFloat(operandoa) * parseFloat(operandob);
          break;
        case "÷":
          res = parseFloat(operandoa) / parseFloat(operandob);
          break;
        // case "%":
        //    res = parseFloat(operandoa) * parseFloat(operandob) /  parseFloat(porcent);
        //   break;
       
      }
       
       $("#cifra").val(res);
       $("#cifra").addClass('color');
       $("#memory").html(operandoa + " " + operacion + " " + operandob + " " + igual + " " + res);
       console.log(res + " PUTOS");
       borrar = $("#cifra").val();
    
    
    
    };
    
    function porcent(){
      var res = 0;
      var porcent = 100;
      switch(operacion){
        case "+":
          res = parseFloat(operandoa) + parseFloat(operandob) ;
          break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob) ;
            break;
        case "x":
          res = parseFloat(operandoa) * parseFloat(operandob);
          break;
        case "÷":
          res = parseFloat(operandoa) / parseFloat(operandob);
          break;
        // case "%":
        //    res = parseFloat(operandoa) * parseFloat(operandob) /  parseFloat(porcent);
        //   break;
       
      }
       
       $("#cifra").val(res.toFixed());
       $("#cifra").addClass('color');
       $("#memory").html(operandoa + " " + operacion + " " + operandob + " " + igual + " " + res);
       console.log(res + " PUTOS");
       borrar = $("#cifra").val();
    
    
    
    };
    
    function por(){
      var res = 0;
      var porcent = 100;
      switch(operacionp){
       
        case "%":
        res = parseFloat(operandoc)  /  parseFloat(porcent);
        break;
       
      }
       
       $("#cifra").val(res);
       $("#cifra").addClass('color');
       $("#memory").html(operandoc + " " + operacionp  + " " + "=" + " " + res);
       console.log(res + " PUTOS");
       borrar = $("#cifra").val();
    
    
    
    };
    
    });