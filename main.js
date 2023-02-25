const qrFormEl=document.getElementById("qrForm");
const qrImageEl=document.getElementById("qrImage");
const qrContaineEl=document.getElementById("qrContainer");
const qrInputTextEl=document.getElementById("qrInputText");
const generateBtnEl=document.getElementById("generateBtn");

const renderQrCode = (url) =>{
    
     if(!url) return;
     generateBtnEl.innerText = "Generating QR Code.....";
     qrImageEl.src = url;
     qrContaineEl.classList.add("show")

     qrImageEl.addEventListener("load", () =>{
        generateBtnEl.innerText = "Generate QR code"
     });
    };

    qrFormEl.addEventListener("submit",(event)=>{
    event.preventDefault();

     const formData = new FormData(qrFormEl);
     const text = formData.get("qrText");

     const qrcodeurl=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=$text`;
     renderQrCode(qrcodeurl);
    });
    qrInputTextEl.addEventListener("keyup",(event)=>{
     if(!qrInputTextEl.value.trim()){
         qrInputTextEl.classList.remove("show");
       }
    });




