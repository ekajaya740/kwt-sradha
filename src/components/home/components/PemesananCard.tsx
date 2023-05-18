'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

export interface PemesananCardProps {
  href: string;
  icon: ReactNode;
  description?: string;
}

const PemesananCard = (props: PemesananCardProps) => {
  return (
    <div
      className={`tooltip tooltip-top tooltip-primary`}
      data-tip={props.description}>
      <Link
        href={props.href}
        target='_blank'
        className={`card bg-base-200 group hover:shadow-md w-fit h-fit`}>
        <div className='card-body'>{props.icon}</div>
      </Link>
    </div>
  );
};

export default PemesananCard;
