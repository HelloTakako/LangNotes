import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <nav className="global-nav">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        
      </ul>

      <style jsx>{`
        .global-nav ul {
          display: flex;
          justify-content: space-between;
          padding: 0;
        }
        .global-nav ul li {
          list-style: none;
        }
      `}</style>
    </nav>
  );
}
