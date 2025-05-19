function openPDF(pdfPath) {
  window.open(pdfPath, '_blank');
}

document.getElementById('openRulebookBtnAR').addEventListener('click', function () {
  openPDF('./water pump.pdf'); // Replace with your actual PDF path

  document.getElementById('openRulebookBtnENG').addEventListener('click', function () {
  openPDF('./wood shop.pdf'); // Replace with your actual PDF path
})
});