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
        .global-nav {
          width: inherit;
          background: #666;
        }
        .global-nav ul {
          width: inherit;
          display: flex;
          justify-content: center;
          gap: 20px;
          padding: 0;
          width: 100vw;
        }
        .global-nav ul li {
          list-style: none;
          a {
            color: white;
            font-weight: bold;
          }
        }

      `}</style>
    </nav>
  );
}
