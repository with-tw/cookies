"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function DocsPageOutline() {
  const [outline, setOutline] = useState<
    {
      id: string;
      value: string;
      isInViewport: boolean;
    }[]
  >([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const newOutline = outline.map(item => {
        const entry = entries.find(entry => entry.target.id === item.id);
        return {
          ...item,
          isInViewport: entry ? entry.isIntersecting : false,
        };
      });
      setOutline(newOutline);
    }, { threshold: 0.5 });

    const headlineTextList: Element[] = Array.from(document.getElementsByClassName('docs-page-headline'));
    headlineTextList.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [outline]);

  useEffect(() => {
    const headlineTextList: Element[] = Array.from(document.getElementsByClassName('docs-page-headline'));
    if (headlineTextList.length) {
      const newOutline = headlineTextList.map((outlineItem: Element) => ({
        id: (outlineItem.textContent || '').toLowerCase().replace(/\s+/g, '-'),
        value: outlineItem.textContent || '',
        isInViewport: false,
      }));
      setOutline(newOutline);
    }
  }, []);

  return (
    <div className="docs-page-outline-wrapper fixed bottom-8 right-16 w-[160px] hidden xl:flex flex-col gap-2 items-start h-auto">
      <p className='text-sm font-medium text-white mb-2'>Page Outline</p> 
      {outline.map(({ id, value, isInViewport }, index: number) => (
        <Link key={index} href={`#${id}`} className={`text-xs ${isInViewport ? 'text-blue-500' : 'text-white/60'}`}>
          {value}
        </Link>
      ))}
    </div>
  );
}
