import { RiInstagramFill, RiMapPinFill, RiWhatsappFill } from 'react-icons/ri';
import PemesananCard from './components/PemesananCard';

const Pemesanan = () => {
  return (
    <div className='lg:py-48 md:py-72 py-20 space-y-16 px-4 md:px-0'>
      <h2 className='text-center font-bold text-primary text-3xl'>Pemesanan</h2>
      <div className='w-full flex sm:flex-row flex-col items-center justify-center space-x-0 sm:space-x-20 space-y-4 sm:space-y-0'>
        <PemesananCard
          href={'https://wa.me/6287703255639'}
          icon={
            <RiWhatsappFill className='w-20 h-20 group-hover:text-green-600' />
          }
          description='Pesan melalui Whatsapp'
        />
        <PemesananCard
          href={'https://www.instagram.com/kwt.sradha/'}
          icon={
            <RiInstagramFill className='w-20 h-20 group-hover:text-[#833AB4]' />
          }
          description='Kunjungi Instagram'
        />
      </div>
    </div>
  );
};

export default Pemesanan;
