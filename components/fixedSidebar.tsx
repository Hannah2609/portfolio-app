'use client';

import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

const FixedSidebar: React.FC = () => {
  const isMediumScreen = useMediaQuery('(min-width: 768px)');

  // Render kun når skærmen er større eb tablet
  if (!isMediumScreen) {
    return null;
  }

  return (
    <div className="fixed left-6 bottom-0 flex flex-col gap-6 z-50">
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

      <div className="h-34 w-0.5 dark:bg-zinc-300 bg-zinc-800 mx-auto"></div>
    </div>
  );
};

export default FixedSidebar;
