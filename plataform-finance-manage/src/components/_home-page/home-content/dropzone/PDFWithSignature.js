// src/components/dropzone/PDFWithSignature.js
import React from 'react';
import { jsPDF } from 'jspdf';
import { pdfjs } from 'pdfjs-dist';

const PDFWithSignature = ({ pdfFile, signaturePosition }) => {
  const generatePdfWithSignature = async () => {
    const pdf = await pdfjs.getDocument(pdfFile).promise;
    const pdfDoc = new jsPDF();

    const totalPages = pdf.numPages;

    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1 });

      // Render page to image
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;

      const imgData = canvas.toDataURL('image/png');
      pdfDoc.addImage(imgData, 'PNG', 0, 0);

      // Adiciona a assinatura na posição especificada
      pdfDoc.text('Assinatura', signaturePosition.x, signaturePosition.y); // Adicione aqui a lógica para colocar a assinatura

      if (pageNumber < totalPages) {
        pdfDoc.addPage();
      }
    }

    pdfDoc.save('pdf_assinado.pdf');
  };

  return (
    <button onClick={generatePdfWithSignature}>
      Baixar PDF com Assinatura
    </button>
  );
};

export default PDFWithSignature;
