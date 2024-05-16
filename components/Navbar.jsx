import React from 'react';
import Link from 'next/link';


export default function Navbar  ()  {
  return (
    <nav>
        <ul>
        <li ><Link href="/">Stock wise</Link></li>
        </ul>
    </nav>
  );
}