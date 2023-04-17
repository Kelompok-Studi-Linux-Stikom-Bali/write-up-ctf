import React, { ChangeEvent, useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import path from 'path';
import { getFilesRecursively } from '@/utils/pdfutils';
import Chips from '@/components/chips';
import { VscEye, VscFilePdf, VscSearch } from 'react-icons/vsc';
import { RiFileDownloadFill } from 'react-icons/ri';
import { isInteger } from '@/utils/isInteger';
import NavBar from '@/components/navbar';
import Input from '@/components/input';
import WriteupCardItems from '@/components/writeup-card-items';
import NavItems from '@/components/nav-items';

interface Props {
  pdfs: string[];
}

const Home: React.FC<Props> = ({ pdfs }) => {
  const [search, setSearch] = useState(pdfs);

  const navItems = [
    {
      label: 'Home',
      href: 'https://kelompok-studi-linux-stikom-bali.github.io/',
      active: false,
    },
    {
      label: 'Writeup',
      href: '',
      active: true,
    },
  ];

  return (
    <>
      <header className='sticky top-0 z-10'>
        <NavBar navItems={[...navItems]} />
      </header>
      <main className='p-4 lg:p-0'>
        <div className='container mx-auto space-y-6 md:py-10 py-4 w-full'>
          <div className='flex'>
            <Input
              {...{
                placeholder: 'Cari writeup',
                label: 'Cari writeup',
                type: 'text',
                icon: <VscSearch className='px-1 ' rotate={180} />,
                onChange: (e: ChangeEvent<HTMLInputElement>): void => {
                  const searchRegex = new RegExp(
                    e.target.value.toLowerCase(),
                    'g'
                  );

                  if (searchRegex.test(e.target.value.toLowerCase())) {
                    setSearch(
                      pdfs.filter(
                        (pdf) => pdf.toLowerCase().match(searchRegex) !== null
                      )
                    );
                  }
                },
              }}
            />
          </div>
          <ul className='grid lg:grid-cols-3 gap-3 md:grid-cols-2 grid-cols-1'>
            {search.map((pdf) => (
              <WriteupCardItems
                key={pdf}
                {...{
                  pdf: pdf,
                }}
              />
            ))}
          </ul>
        </div>
      </main>
    </>
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
