import { useState } from "react";
import {CATEGORIES, Category, INSTRUCTORS_DATA } from "./components/CarouselData";
import { CarouselBody } from "./components/CarouselBody";
import { Button } from "../Buttons/Buttons";

export const Carousels = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("AI");

  // Filter items matching active tab 
  const filteredInstructors = INSTRUCTORS_DATA.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="w-full py-16 bg-[#030712] text-white">
      {/* Carousel Heading */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          Learn from the best in the industry
        </h2>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 py-8 px-4">
        {CATEGORIES.map((category) => (
          <Button
            key={category}
            id={`tab-${category.toLowerCase()}`}
            label={category}
            size="sm"
            variant="secondary"
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>

      {/* Slider Body */}
      <CarouselBody
        items={filteredInstructors.length > 0 ? filteredInstructors : INSTRUCTORS_DATA}
      />
    </section>
  );
};