import { useRef } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Instructor } from './CarouselData';
import { CarouselProfileCard } from './CarouselProfileCard';

interface CarouselBodyProps {
  items: Instructor[];
}

export const CarouselBody = ({ items }: CarouselBodyProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollOffset = 290;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollOffset : scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  if (items.length === 0) {
    return (
      <div className="py-16 text-center text-subtle text-sm">
        No instructors found in this category.
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      {/* Left Scroll Button */}
      <button
        type="button"
        onClick={() => scroll('left')}
        aria-label="Previous Slide"
        className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-app/50 border border-subtle/50 text-white backdrop-blur-sm transition-all hover:bg-app/30 active:scale-95"
      >
        <IconChevronLeft size={20} />
      </button>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-4 overflow-x-auto scroll-smooth py-6 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item) => (
          <CarouselProfileCard
            key={item.id}
            imageSrc={item.imageSrc}
            name={item.name}
            role={item.role}
            achievement={item.achievement}
          />
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        type="button"
        onClick={() => scroll('right')}
        aria-label="Next Slide"
        className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-app/50 border border-subtle/50 text-secondary backdrop-blur-sm transition-colors hover:bg-bg-primary active:scale-95"
      >
        <IconChevronRight size={20} />
      </button>
    </div>
  );
};
