
    function createQrCode()
    {
        var userInput = document.getElementById('valor').value;

      if(userInput != "")
      {
        $("#qr").attr("disabled", false);

        qrcode = new QRCode("qrcode", {
            text: userInput,
            width: 256,
            height: 256,
            colorDark: "black",
            colorLight: "white",
            correctLevel : QRCode.CorrectLevel.H
        });

      }

      else
      {
    
        $("#qr").attr("disabled", true);

      }
        
    }



function limpiar()
{
    
    document.getElementById('valor').value = "";
    location.reload();
        
}

