import { ReactNode } from 'react';
import { IconContext } from 'react-icons';

export interface IInput {
  label: string;
  placeholder: string;
  type: string;
  icon?: ReactNode;
}

const Input = (props: IInput) => {
  return (
    <div className='flex flex-col space-y-1 '>
      <div className='relative'>
        <IconContext.Provider
          value={{
            className:
              'text-2xl absolute left-2 top-1/2 transform -translate-y-1/2',
          }}>
          {props.icon}
        </IconContext.Provider>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className='border-2 border-black rounded-md px-8 py-3 w-full focus:outline-none focus:border-blue-400'
        />
      </div>
    </div>
  );
};
export default Input;
