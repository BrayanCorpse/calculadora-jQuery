$(document).ready(function() {
    // Create a newDate() object
    var newDate = new Date();
    
    setInterval( function() {
        // Create a newDate() object and extract the seconds of the current time on the visitor's
        var seconds = new Date().getSeconds();
        // Añadiendo 0 para doble digito.
        $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
        },1000);
        
    setInterval( function() {
        // Obteniendo minutos de la fecha
        var minutes = new Date().getMinutes();
        // Añadiendo 0 para doble digito.
        $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
        },1000);
        
    setInterval( function() {
        // Create a newDate() object and extract the hours of the current time on the visitor's
        var hours = new Date().getHours();
        // Add a leading zero to the hours value
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
        }, 1000);	
    
      
    });