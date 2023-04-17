import Link from 'next/link';

export interface INavItems {
  label: string;
  active?: boolean;
  href: string;
}

const NavItems = (props: INavItems) => {
  return (
    <Link
      href={props.href}
      className={` hover:underline ${
        props.active
          ? 'font-bold underline text-black'
          : 'font-semibold text-gray-600'
      }`}>
      <p>{props.label}</p>
    </Link>
  );
};

export default NavItems;
