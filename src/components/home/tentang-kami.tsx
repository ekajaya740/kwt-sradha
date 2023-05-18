import Image from 'next/image';

const TentangKami = () => {
  return (
    <div className='space-y-10'>
      <Image
        src='/images/hero.jpeg'
        alt='hero'
        width={1920}
        height={1080}
        className='w-full'
        loading='eager'
      />
      <div className='container mx-auto space-y-6 px-4 md:px-0'>
        <div className='divider '>
          <h1 className='text-center text-3xl font-bold text-primary'>
            Tentang Kami
          </h1>
        </div>
        <p className='text-justify'>
          Kata KWT berarti Kelompok Wanita Tani yaitu sekelompok wanita
          khususnya ibu rumah tangga yang diberdayakan agar dapat membantu
          perkekonomian kelaurga. Sedangkan kata sradha sendiri merujuk pada
          Peningkatan Srada Bhakti Masyarakat Kepada Tuhan Yang Maha Esa. Jadi
          dengan dibentuknya KWT Sradha ini diharapkan dapat memberdayakan para
          ibu rumah tangga dan tetap dapat meningkatkan rasa bhakti dan syukur
          ke hadirat Tuhan Yang Maha Esa. KWT Sradha dikelola oleh para Wanita
          di Desa Sibetan dan didirikan pada tanggal 1 Januari Tahun 2013 oleh
          Almarhum Bapak Perbekel yang pada saat itu hanya berjumlah 10 orang
          anggota. Kemudian seiring berjalannya waktu, berkembang menjadi
          kelompok arisan berjumlah 30 orang anggota.
        </p>
      </div>
    </div>
  );
};

export default TentangKami;
