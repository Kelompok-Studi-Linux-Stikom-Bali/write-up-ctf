import Link from 'next/link';
import Image from 'next/image';
import Button from './button';
import NavItems from './nav-items';

const NavBar = () => {
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
    <nav className='border-t-2 border-b-2 border-black bg-white px-2'>
      <div className='container mx-auto flex justify-between'>
        <div className='flex md:space-x-20 space-x-6'>
          <Link href={navItems[0].href}>
            <Image
              alt='logo KSL'
              src={'/write-up-ctf/logo.png'}
              width={80}
              height={80}
              className='pt-1'
            />
          </Link>
          <ul className='flex items-center md:space-x-8 space-x-2'>
            {navItems.map((item) => (
              <NavItems {...item} />
            ))}
          </ul>
        </div>
        <Button
          {...{
            label: 'Daftar',
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
