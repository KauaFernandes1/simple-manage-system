import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

export const PDFViewer = ({ file }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const renderPDF = async () => {
      const loadingTask = pdfjsLib.getDocument(file);
      const pdf = await loadingTask.promise;

      const page = await pdf.getPage(1); // Renderiza apenas a primeira página
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;
    };

    if (file) {
      renderPDF();
    }
  }, [file]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

