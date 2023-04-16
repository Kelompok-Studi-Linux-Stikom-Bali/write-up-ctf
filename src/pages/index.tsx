import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import path from 'path';
import { getFilesRecursively } from '@/utils/pdfutils';

interface Props {
  pdfs: string[];
}

const Home: React.FC<Props> = ({ pdfs }) => {
  return (
    <div>
      <h1>List of PDFs</h1>
      <ul>
        {pdfs.map((pdf) => (
          <li key={pdf}>
            <Link href={`/writeups/${pdf}`}>{pdf}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pdfDir = path.join(process.cwd(), 'public', 'writeups');
  const pdfs = getFilesRecursively(pdfDir)
    .filter((file: any) => file.endsWith('.pdf'))
    .map((file: any) => file.replace(pdfDir, '').slice(1));
  return {
    props: {
      pdfs,
    },
  };
};
