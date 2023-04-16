import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import path from 'path';
import { getFilesRecursively } from '@/utils/pdfutils';
import Chips from '@/components/chips';
import { VscFilePdf } from 'react-icons/vsc';
import { RiFileDownloadFill } from 'react-icons/ri';
import { isInteger } from '@/utils/isInteger';

interface Props {
  pdfs: string[];
}

const Home: React.FC<Props> = ({ pdfs }) => {
  return (
    <main className='p-4 lg:p-0'>
      <div className='container mx-auto space-y-6'>
        <h1>Daftar Writeup CTF</h1>
        <ul className='grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1'>
          {pdfs.map((pdf) => (
            <div
              key={pdf}
              className='border-2 p-3 rounded-md border-black hover:bg-gray-200 space-y-2 flex flex-col justify-between'>
              <div className='flex space-x-1'>
                {isInteger(pdf.split('/')[1]) ? (
                  <Chips
                    {...{
                      text: pdf.split('/')[1].toUpperCase(),
                      className: 'bg-blue-400 text-white border border-black',
                    }}
                  />
                ) : (
                  <></>
                )}
                <Chips
                  {...{
                    text: pdf.split('/')[0].toUpperCase(),
                    className: 'bg-purple-400 text-white border border-black',
                  }}
                />
              </div>
              <h2 className='line-clamp-3'>{pdf}</h2>
              <div className='flex space-x-2 justify-stretch'>
                <Link
                  href={`/viewer/writeups/${pdf}`}
                  target='_blank'
                  className='bg-red-400 p-1 text-white flex space-x-1 items-center rounded-md px-3'>
                  <VscFilePdf className='text-xl' />
                  <p className='font-bold'>View PDF</p>
                </Link>
                <Link
                  href={`/writeups/${pdf}`}
                  target='_blank'
                  className='bg-blue-400 p-1 text-white flex space-x-1 items-center rounded-md px-3'>
                  <RiFileDownloadFill className='text-xl' />
                  <p className='font-bold'>Download PDF</p>
                </Link>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </main>
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
