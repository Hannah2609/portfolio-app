import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Links() {
  return (
    <div className="flex flex-row gap-6">
      <Link href="mailto:deterhannahs@gmail.com" aria-label="Email">
        <div className="dark:text-zinc-300 text-zinc-800 hover:text-zinc-500 dark:hover:text-zinc-500 transition-colors duration-300">
          <Mail size={20} />
        </div>
      </Link>

      <Link
        href="https://www.linkedin.com/in/hannahisabelgrenade/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <div className="dark:text-zinc-300 text-zinc-800 hover:text-zinc-500 dark:hover:text-zinc-500 transition-colors duration-300">
          <Linkedin size={20} />
        </div>
      </Link>

      <Link
        href="https://github.com/hannah2609"
        target="_blank"
        aria-label="GitHub"
      >
        <div className="dark:text-zinc-300 text-zinc-800 hover:text-zinc-500 dark:hover:text-zinc-500 transition-colors duration-300">
          <Github size={20} />
        </div>
      </Link>
    </div>
  );
}

export default Links