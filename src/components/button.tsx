export interface IButton {
  onClick?: () => void;
  label: string;
}

const Button = (props: IButton) => {
  return (
    <button
      onClick={props.onClick}
      className='bg-black text-white font-bold px-8 py-1 my-6 rounded-full hover:bg-gray-800'>
      {props.label}
    </button>
  );
};

export default Button;
