// src/components/dropzone/PDFViewer.js
import React, { useEffect, useRef, useState } from 'react';
import { pdfjs } from 'pdfjs-dist';
import PDFWithSignature from './PDFWithSignature';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js`;

export const PDFViewer = ({ file }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const [signaturePosition, setSignaturePosition] = useState({ x: 0, y: 0 });
  const [showSignature, setShowSignature] = useState(false);
  const canvasRef = useRef(null);

  const loadPdf = (pdf) => {
    pdf.getPage(pageNumber).then((page) => {
      const viewport = page.getViewport({ scale: 1 });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      page.render(renderContext);
    });
  };

  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.onload = async (e) => {
      const pdfData = new Uint8Array(e.target.result);
      const pdf = await pdfjs.getDocument(pdfData).promise;
      setNumPages(pdf.numPages);
      loadPdf(pdf);
    };
    fileReader.readAsArrayBuffer(file);
  }, [file, pageNumber]);

  const handleSignatureDrag = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setSignaturePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div style={{ position: 'relative' }}>
      <canvas ref={canvasRef} />
      {showSignature && (
        <div
          draggable
          onDrag={handleSignatureDrag}
          style={{
            position: 'absolute',
            left: signaturePosition.x,
            top: signaturePosition.y,
            width: '100px',
            height: '50px',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            cursor: 'move',
          }}
        >
          Assinatura
        </div>
      )}
      <button onClick={() => setShowSignature(!showSignature)}>
        {showSignature ? 'Remover Assinatura' : 'Adicionar Assinatura'}
      </button>
      <PDFWithSignature pdfFile={file} signaturePosition={signaturePosition} />
    </div>
  );
};

