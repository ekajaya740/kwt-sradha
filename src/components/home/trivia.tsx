const Trivia = () => {
  return (
    <div className='pt-24 px-4 md:px-0'>
      <div className='container mx-auto space-y-6'>
        <div className='divider'>
          <h1 className='text-center text-3xl font-bold text-primary flex-wrap'>
            Trivia
          </h1>
        </div>
        <div className='space-y-4'>
          <h2 className='text-2xl font-bold'>Taksonomi</h2>
          <div className='space-y-2'>
            <p>
              Kedudukan tanaman salak (
              <span className='italic'>Salacca zalacca</span>) dalam sistematika
              (Taksonomi) tumbuhan adalah sebagai berikut :
            </p>
            <ul className='table list-inside list-disc'>
              <li>Kingdom: Plantae (Tumbuh-tumbuhan)</li>
              <li>Divisi: Spermatophyta (Tumbuhan berbiji)</li>
              <li>Sub divisi: Angiospermae (Berbiji tertutup)</li>
              <li>Kelas: Monocotyledonae (Biji berkeping satu)</li>
              <li>Ordo: Palmae (Palmales)</li>
              <li>Famili: Palmaceae</li>
              <li>
                Genus : <span className='italic'>Salacca</span>
              </li>
              <li>
                Spesies : <span className='italic'>Salacca zalacca</span>,{' '}
                <span className='italic'>Salacca multiflora</span>,{' '}
                <span className='italic'>Salacca edulis</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='space-y-3'>
          <h2 className='text-2xl font-bold'>Kandungan Gizi</h2>
          <div className='space-y-1'>
            <table className='table table-zebra table-fixed border-3 border-collapse w-full'>
              <thead>
                <tr>
                  <th className='border border-black text-center'>Komponen</th>
                  <th className='border border-black text-center'>Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-black pl-3'>Kalori</td>
                  <td className='border border-black text-center'>77 kal</td>
                </tr>
                <tr>
                  <td className='border border-black pl-3'>Protein</td>
                  <td className='border border-black text-center'>0,5 gr</td>
                </tr>
                <tr>
                  <td className='border border-black pl-3'>Karbohidrat</td>
                  <td className='border border-black text-center'>20.9 gr</td>
                </tr>
                <tr>
                  <td className='border border-black pl-3'>Kalsium</td>
                  <td className='border border-black text-center'>28 gr</td>
                </tr>
                <tr>
                  <td className='border border-black pl-3'>Fosfor</td>
                  <td className='border border-black text-center'>18 mg</td>
                </tr>
                <tr>
                  <td className='border border-black pl-3'>Besi</td>
                  <td className='border border-black text-center'>4,2 mg</td>
                </tr>
                <tr>
                  <td className='border border-black pl-3'>Vit B1</td>
                  <td className='border border-black text-center'>0,04 mg</td>
                </tr>
                <tr>
                  <td className='border border-black pl-3'>Vit C</td>
                  <td className='border border-black text-center'>2 mg</td>
                </tr>
              </tbody>
            </table>
            <p className='text-center text-sm font-bold'>
              Kandungan Gizi Buah Salak Per 100 gram Buah Segar
            </p>
          </div>
          <div className='space-y-1'>
            <p>
              Sedangkan Kandungan gizi fitonutrien dari Buah Salak meliputi:
            </p>
            <ul className='list-decimal list-inside'>
              <li>Provitamin A (Karotenoid dan vit c)</li>
              <li>Mineral potassium</li>
              <li>Tanin</li>
              <li>Serat</li>
            </ul>
          </div>
        </div>
        <div className='space-y-1'>
          <h2 className='text-2xl font-bold'>
            Manfaat Buah Salak (<span className='italic'>Salacca zalacca</span>)
          </h2>
          <ul className='list-decimal list-inside'>
            <li>Buah salak penyedia serat dan mineral.</li>
            <li>Anti oksidan dan vitamin.</li>
            <li>
              Kaya kalsium sehingga baik untuk pertumbuhan tulang dan gigi.
            </li>
            <li>Mengobati diare.</li>
            <li>Mengatasi insomnia.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Trivia;
