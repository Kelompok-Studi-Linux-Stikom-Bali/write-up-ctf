import PdfViewer from '@/components/pdf-viewer';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Index = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  console.log(Array.isArray(slug) ? slug.join('/') : slug ?? '');

  return (
    <PdfViewer pdfUrl={Array.isArray(slug) ? slug.join('/') : slug ?? ''} />
  );
};

export default Index;
