import Link from 'next/link';
import { RiInstagramFill, RiMapPinFill, RiWhatsappFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className='footer p-10 bg-primary text-neutral-content'>
      <div>
        <h1 className='font-bold text-4xl'>
          KWT <br></br> Sradha
        </h1>
        <p>Kelompok Wanita Tani Sradha</p>
      </div>
      <div>
        <h2 className='footer-title'>Informasi</h2>
        <Link
          target='_blank'
          href={'https://wa.me/6287703255639'}
          className='flex space-x-1 items-center
        '>
          <RiWhatsappFill className='w-6 h-6 inline-block mr-2' />
          <p>087703255639 - Wayan Nik</p>
        </Link>
        <Link
          target='_blank'
          href={'https://www.instagram.com/kwt.sradha/'}
          className='flex space-x-1 items-center'>
          <RiInstagramFill className='w-6 h-6 inline-block mr-2' />
          <p>@kwt.sradha</p>
        </Link>
        <div className='flex space-x-1 items-center'>
          <RiMapPinFill className='w-6 h-6 inline-block mr-2' />
          <p className='md:w-96 w-full'>
            Banjar Dinas Telaga, Desa Sibetan, Kecamatan Bebandem, Kabupaten
            Karangasem, Bali.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
