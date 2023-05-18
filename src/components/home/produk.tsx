import Image from 'next/image';
import Link from 'next/link';

const Produk = () => {
  const dataPia = [
    {
      image: {
        src: '/images/produk/pia-12k.jpeg',
        alt: 'Pia salak 6 pcs',
      },
      nama: 'Pia Salak',
      harga: 'Rp12.000',
      jumlah: 6,
    },
    {
      image: {
        src: '/images/produk/pia-100k.jpeg',
        alt: 'Pia salak 50 pcs',
      },
      nama: 'Pia Salak',
      harga: 'Rp100.000',
      jumlah: 50,
    },
  ];
  return (
    <div className='pt-24 px-4 md:px-0'>
      <div className='container mx-auto space-y-6'>
        <div className='divider'>
          <h1 className='text-center text-3xl font-bold text-primary'>
            Produk
          </h1>
        </div>
        <div className='flex sm:space-x-10 space-y-4  sm:space-y-0 items-center justify-center flex-col sm:flex-row'>
          {dataPia.map((item, index) => (
            <div key={index} className='card w-fit card-compact bg-base-200'>
              <figure>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={300}
                  height={300}
                  className='h-56 object-cover'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title text-2xl'>{item.nama}</h2>
                <p>
                  <span className='font-bold'>{item.harga}</span> /{' '}
                  {item.jumlah} pcs
                </p>
                <div className='card-actions justify-stretch mt-10'>
                  <a href={'#pemesanan'} className='btn btn-primary w-full'>
                    Beli Sekarang!
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className='text-justify'>
          Pia salak merupakan inovasi olahan dari buah salak yang memiliki
          tekstur selayaknya pia pada umumnya dan memiliki selai buah salak
          ditengahnya dengan sensasi rasa unik yaitu asam dan manis yang
          menyegarkan sehingga membuat pia salak ini semakin kaya rasa. Selain
          rasanya yang enak, salak juga memliki beragam manfaat, mulai dari
          antioksidan yang tinggi menurut Penelitian Kapasitas Antioksidan Buah
          Salak (Salacca edulis REINW) Kultivar Pondoh, Nglumut dan Bali Serta
          Kolerasinya dengan Kadar Fenolik Total dan Vitamin C oleh Setyaningrum
          Ariviani, Nur Her Riyadi Parnanto pada Tahun 2013. Buah salak juga
          dapat bermanfaat mengobati diare menurut penelitian Uji Efektivitas
          Antidiare Perasan Buah Salak (Salacca zalacca) Terhadap Mencit Putih
          Jantan oleh Wildan Nurlia Laelatul Isnaeni pada Tahun 2013.
        </p>
      </div>
    </div>
  );
};

export default Produk;
