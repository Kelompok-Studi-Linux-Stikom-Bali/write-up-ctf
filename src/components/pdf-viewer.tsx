import getConfig from 'next/config';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

interface Props {
  pdfUrl: string;
}

function PdfViewer({ pdfUrl }: Props) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className='flex justify-center py-6'>
      <Document
        className='border-2 border-black px-10'
        options={{
          margin: [0, 0, 0, 0],
          cMapUrl: 'cmaps/',
        }}
        file={`/write-up-ctf/${pdfUrl}`}
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      <div className='flex fixed p-10 bottom-0 space-x-4 w-full justify-center'>
        <button
          onClick={() => {
            if (pageNumber !== null && pageNumber > 1) {
              setPageNumber(pageNumber !== null ? pageNumber - 1 : 1);
            }
          }}>
          Prev
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>

        <button
          onClick={() => {
            if (
              pageNumber !== null &&
              pageNumber < (numPages !== null ? numPages : 1)
            ) {
              setPageNumber(pageNumber !== null ? pageNumber + 1 : 1);
            }
          }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PdfViewer;
