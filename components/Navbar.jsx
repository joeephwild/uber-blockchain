import Image from 'next/image'
import logo from '../public/assets/uber-logo.png'
import { BsPerson } from 'react-icons/bs'

const style = {
    wrapper: ` w-full bg-[#101010] h-11 text-white flex justify-between items-center px-6 fixed z-70`,
  }

  const currentAccount = '0x013166D598AB78A8ddf8C1bF34Ff9bC7C50D36D2'
const Navbar = () => {
  return <div className={style.wrapper}>
    <Image src={logo} height={50} width={50} objectFit='contain' />
    <div>
      <button className='bg-white text-black px-4 py-2 text-sm font-bold rounded-full'>Connect Wallet</button>
    </div>
  </div>;
};

export default Navbar;
