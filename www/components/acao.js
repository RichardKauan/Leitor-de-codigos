$(document).on("click","#alertaUm",function(){
  navigator.notification.alert("Mensagem de alerta 1");
});

$(document).on("click","#alertaDois",function(){
  function retorno(){

  }
  navigator.notification.alert("Mensagem de alerta 2", retorno, "Aviso", "Entendi" )
});

$(document).on("click","#alertaTres",function(){
  function onConfirm(buttonIndex) {
    if(buttonIndex == 1) {
      navigator.notification.alert('Escolheu a opção sim!');
    }else{
      navigator.notification.alert('Escolheu a opção não!');
    }
  } 

  navigator.notification.confirm("Escolha a opção sim ou não!", onConfirm, "Escolha", ['Sim','Não']);
});

$(document).on("click","#alertaQuatro",function(){

});

$(document).on("click","#codigoBarra",function(){
  cordova.plugins.barcodeScanner.scan(
      function (result) {
        if(result.text == "A9U23-90009"){
          $(location).attr("href","page2.html");
        }
          alert("Nós temos um código de barras\n" +
                "Resultado: " + result.text + "\n" +
                "Formato: " + result.format + "\n" +
                "Cancelado: " + result.cancelled);
      },
      function (error) {
          navigator.notification.alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: false, // Android, save scan history (default false)
          prompt : "Coloque um código de barras dentro da área de digitalização", // Android
          resultDisplayDuration: 1500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417, CODE_39, RSS_EXPANDED", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : false, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
});

