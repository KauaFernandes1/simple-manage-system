// src/components/dropzone/Dropzone.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PDFViewer from './pdfviewer.js';

export const Dropzone = () => {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setFile(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} style={{ border: '2px dashed #cccccc', padding: '20px', cursor: 'pointer' }}>
        <input {...getInputProps()} />
        <p>Arraste e solte um arquivo PDF aqui ou clique para selecionar</p>
      </div>
      {file && <PDFViewer file={file} />}
    </div>
  );
};

