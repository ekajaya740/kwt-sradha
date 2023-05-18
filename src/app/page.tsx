'use client';
import Navbar from '@/components/Navbar';
import Pemesanan from '@/components/home/pemesanan';
import Produk from '@/components/home/produk';
import TentangKami from '@/components/home/tentang-kami';
import Trivia from '@/components/home/trivia';
import { useRef } from 'react';
import useScrollSpy from 'react-use-scrollspy';

export default function Home() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -100,
  });

  return (
    <>
      <header className='z-[9999] sticky top-0'>
        <Navbar activeSection={activeSection ?? 0} />
      </header>
      <section ref={sectionRefs[0]} id='tentang-kami'>
        <TentangKami />
      </section>
      <section ref={sectionRefs[1]} id='produk'>
        <Produk />
      </section>
      <section ref={sectionRefs[2]} id='trivia'>
        <Trivia />
      </section>
      <section ref={sectionRefs[3]} id='pemesanan'>
        <Pemesanan />
      </section>
    </>
  );
}
