import React from 'react';
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer>
      <small>&copy; {currentYear} HelloTakako </small><FaGithub />
    </footer>
  );
}
