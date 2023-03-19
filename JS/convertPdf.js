function gerarPdf(){

var doc = new jsPDF();

doc.fromHTML(`<h1>CURRICULUM VITAE</h1>`);

doc.save('curriculo.pdf');

}

