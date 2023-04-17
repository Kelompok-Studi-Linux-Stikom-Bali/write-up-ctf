import { isInteger } from '@/utils/isInteger';
import Chips from './chips';
import Link from 'next/link';
import { VscEye } from 'react-icons/vsc';
import { RiFileDownloadFill } from 'react-icons/ri';
import { useState } from 'react';

export interface IWriteupCardItems {
  pdf: string;
}

const WriteupCardItems = (props: IWriteupCardItems) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className='border-2 p-3 rounded-md border-black hover:bg-gray-200 space-y-5 flex flex-col justify-between'>
        <div className='flex space-x-1'>
          {isInteger(props.pdf.split('/')[1]) ? (
            <Chips
              {...{
                text: props.pdf.split('/')[1].toUpperCase(),
                className: 'bg-blue-400 text-white border border-black',
              }}
            />
          ) : (
            <></>
          )}
          <Chips
            {...{
              text: props.pdf.split('/')[0].toUpperCase(),
              className: 'bg-purple-400 text-white border border-black',
            }}
          />
        </div>
        <h2 className='line-clamp-3'>
          {props.pdf.split('/')[2] !== undefined
            ? props.pdf.split('/')[2]
            : props.pdf.split('/')[1]}
        </h2>
        <div className='flex space-x-2 justify-stretch'>
          <Link
            href={`/writeups/${props.pdf}`}
            target='_blank'
            className='bg-red-400 w-full p-1 text-white flex space-x-1 items-center rounded-md px-3'>
            <RiFileDownloadFill className='text-xl' />
            <p className='font-bold'>Download PDF</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WriteupCardItems;
