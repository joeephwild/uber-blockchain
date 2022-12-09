import Image from 'next/image'
import logo from '../public/assets/uber-logo.png'
import avatar from '../public/assets/avatar.png'
import { BsPerson } from 'react-icons/bs'

const style = {
    wrapper: ` w-full bg-[#101010] h-11 text-white flex justify-between items-center px-6 fixed z-70`,
  }

  const currentAccount = '0x013166D598AB78A8ddf8C1bF34Ff9bC7C50D36D2'
const Navbar = () => {
  return <div className={style.wrapper}>
    <Image src={logo} height={50} width={50} objectFit='contain' />
    {currentAccount ? (
      <button className='flex bg-[#fafafa] text-[#101010] font-bold px-4 py-2 rounded-lg items-center space-x-2'>
        <Image src={avatar} width={20} height={20} objectFit='contain' />
        <small>{currentAccount.slice(0,5)}...{currentAccount.slice(36, 47)}</small>
      </button>
    ): (
      <div>
      <button className='bg-white text-black px-4 py-2 text-sm font-bold rounded-lg'>Connect Wallet</button>
    </div>
    )}
  </div>;
};

export default Navbar;
