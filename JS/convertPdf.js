function gerarPdf(){

var doc = new jsPDF();

doc.fromHTML('<h1>CURRICULO VITAE</h1>');

doc.save('curriculo.pdf');

}

