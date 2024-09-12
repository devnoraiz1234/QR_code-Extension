window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('btn').addEventListener('click', ()=>{
        let input= document.getElementById('input').value;
        let container= document.getElementById('QR');

        container.innerHTML="";

        let code= new QRCode(container, {
            text: input,
            height: 150,
            width: 150,
        });

        // Add a timeout to ensure QR code is rendered before attempting to download
        setTimeout(() => {
            let qrImg = container.querySelector('img');
            if (qrImg) {
                let link = document.createElement('a');
                link.href = qrImg.src;
                link.download = 'qrcode.png';
                link.click();
            }
        }, 500);
        
        
             });
    });

         




// window.addEventListener('DOMContentLoaded', (event) => {
//     document.getElementById('btn').addEventListener('click', () => {
//         let input = document.getElementById('input').value;
//         let container = document.getElementById('QR');

//         container.innerHTML = "";

//         let code = new QRCode(container, {
//             text: input,
//             height: 150,
//             width: 150,
//         });

//         // Add a timeout to ensure QR code is rendered before attempting to download
//         setTimeout(() => {
//             let qrCodeImg = container.querySelector('img');
//             if (qrCodeImg) {
//                 let link = document.createElement('a');
//                 link.href = qrCodeImg.src;
//                 link.download = 'qrcode.png';
//                 link.click();
//             }
//         }, 500);
//     });
// });
