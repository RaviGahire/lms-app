import React, { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import { Button } from '../../../shared/components/Buttons/Buttons';

const CATEGORIES = [
  { id: 'all', label: 'All Subjects (1,240)' },
  { id: 'software', label: 'Software & Distributed Systems' },
  { id: 'ai', label: 'Artificial Intelligence & Data' },
  { id: 'design', label: 'Design & Spatial UX' },
  { id: 'bio', label: 'Bio-Sciences & Physics' },
  { id: 'finance', label: 'Quantitative Finance & Strategy' },
];

interface CourseFilterBarProps {
  onSearch?: (query: string) => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const CourseFilterBar = ({
  onSearch,
  onSelectCategory,
}: CourseFilterBarProps) => {
  //States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearchSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
    alert('Working');
  };

  const handleCategoryClick = (id: string) => {
    setSelectedCategory(id);
    onSelectCategory?.(id);
  };

  return (
    <div className="px-4 lg:px-10">
      <div className="w-full mx-auto max-w-7xl rounded-2xl border border-slate-800/80 bg-bg-secondary p-2 sm:p-5 shadow-2xl backdrop-blur-md">
        {/* Search Input Box */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative flex items-center "
        >
          <div className="pointer-events-none absolute left-4 flex items-center text-slate-400">
            <IconSearch size={18} />
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses, skills, tools like PyTorch, Figma, Rust, Financial Modeling..."
            className="w-full rounded-xl border border-slate-800/80 bg-[#070D18] py-3.5 pl-12 pr-32 text-sm sm:text-base text-slate-100 placeholder-slate-500 transition-colors focus:border-blue-500/80 focus:outline-none focus:ring-0.5 focus:ring-blue-500/80"
          />

          {/* Search Action Button */}
          <Button
            type="submit"
            size="sm"
            label="Search"
            variant="outline"
            icon={<IconSearch size={18} />}
            className="absolute right-2 flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold"
          />
        </form>

        {/* Filter Bar */}
        <div className="mt-4 hidden md:flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="font-semibold uppercase tracking-wider text-slate-400 mr-1.5 select-none text-[11px]">
            FILTER BY:
          </span>

          <div className="flex flex-wrap items-center gap-2 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <Button
                  type="button"
                  key={category.id}
                  label={category.label}
                  size="sm"
                  variant="outline"
                  onClick={() => handleCategoryClick(category.id)}
                  className={`${isSelected ? 'bg-bg-surface text-white shadow-sm font-semibold' : 'text-text-muted'}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
