import cn from 'classnames';

export interface IChips {
  text: string;
  className?: string;
}

const Chips = (props: IChips) => {
  return (
    <div className={cn(`rounded-full px-2 py-1 max-w-fit ${props.className}`)}>
      <p className='text-sm text-white font-light'>{props.text}</p>
    </div>
  );
};

export default Chips;
