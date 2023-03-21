
/*function ConverterBase64(){

    const receberarquivo = document.getElementById("cabecalho-curriculo").files;
    let lerArquivo = new FileReader();
    lerArquivo.onload = function(arquivoCarregado){
        const imagemBase64 = arquivoCarregado.target.result;
        console.log(imagemBase64);
    }
}*/


function gerarPdf(){

    var doc = new jsPDF();
    
    doc.fromHTML('<h5>Curriculo Ricardo Rosa Rodriguez/h5>');
 
    
    doc.save('curriculo.pdf');
    
    }


