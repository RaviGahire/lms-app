import React from 'react';

const categories = [
  {
    title: "Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam quisquam ullam libero.",
    iconColor: "#49BBBD",
    path: "M9.84375 18.1641L15 22.4414C15 22.6172 15.0586 22.793 15.0586 22.9688C15.0586 27.4805 11.9531 30 7.55859 30C2.22656 30 0.0585938 25.7812 0 20.9766C0.585938 21.3281 2.63672 22.9688 3.28125 22.9688C3.63281 22.9688 3.98438 22.7344 4.10156 22.3828C5.33203 19.2188 7.44141 18.2812 9.84375 18.1641ZM26.8359 0C28.5352 0 30.0586 1.23047 30.0586 2.92969C30.0586 3.86719 29.6484 4.80469 29.2383 5.625C22.6172 17.9883 20.5078 20.625 16.8164 20.625C16.4062 20.625 15.9375 20.5664 15.5273 20.4492L11.7773 17.3438C11.4844 16.6406 11.3086 15.8789 11.3086 15.1172C11.3086 11.9531 12.5391 11.7188 24.4922 0.996094C25.1367 0.410156 25.957 0 26.8359 0Z",
    viewBox: "0 0 31 30"
  },
  {
    title: "Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam quisquam ullam libero.",
    iconColor: "#5B72EE",
    path: "M30.9375 0C32.4609 0 33.75 1.28906 33.75 2.8125V21.5625C33.75 23.1445 32.4609 24.375 30.9375 24.375H19.6875L20.625 27.1875H24.8438C25.6055 27.1875 26.25 27.832 26.25 28.5938C26.25 29.4141 25.6055 30 24.8438 30H8.90625C8.08594 30 7.5 29.4141 7.5 28.5938C7.5 27.832 8.08594 27.1875 8.90625 27.1875H13.125L14.0625 24.375H2.8125C1.23047 24.375 0 23.1445 0 21.5625V2.8125C0 1.28906 1.23047 0 2.8125 0H30.9375ZM30 20.625V3.75H3.75V20.625H30Z",
    viewBox: "0 0 34 30"
  },
  {
    title: "Personal Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam quisquam ullam libero.",
    iconColor: "#9DCCFF",
    path: "M26.25 4.33594V6.97266C26.25 9.375 20.332 11.25 13.125 11.25C5.85938 11.25 0 9.375 0 6.97266V4.33594C0 1.93359 5.85938 0 13.125 0C20.332 0 26.25 1.93359 26.25 4.33594ZM26.25 10.3125V16.3477C26.25 18.75 20.332 20.625 13.125 20.625C5.85938 20.625 0 18.75 0 16.3477V10.3125C2.8125 12.3047 7.96875 13.1836 13.125 13.1836C18.2227 13.1836 23.3789 12.3047 26.25 10.3125ZM26.25 19.6875V25.7227C26.25 28.125 20.332 30 13.125 30C5.85938 30 0 28.125 0 25.7227V19.6875C2.8125 21.6797 7.96875 22.5586 13.125 22.5586C18.2227 22.5586 23.3789 21.6797 26.25 19.6875Z",
    viewBox: "0 0 27 30"
  },
  {
    title: "Business",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam quisquam ullam libero.",
    iconColor: "#00CBB8",
    path: "M18.75 17.8125V15H30V23.4375C30 24.9609 28.6523 26.25 27.1875 26.25H2.8125C1.28906 26.25 0 24.9609 0 23.4375V15H11.25V17.8125C11.25 18.3398 11.6602 18.75 12.1875 18.75H17.8125C18.2812 18.75 18.75 18.3398 18.75 17.8125ZM27.1875 5.625C28.6523 5.625 30 6.97266 30 8.4375V13.125H0V8.4375C0 6.97266 1.28906 5.625 2.8125 5.625H7.5V2.8125C7.5 1.34766 8.78906 0 10.3125 0H19.6875C21.1523 0 22.5 1.34766 22.5 2.8125V5.625H27.1875ZM18.75 5.625V3.75H11.25V5.625H18.75Z",
    viewBox: "0 0 30 27"
  }
  // Add more categories as needed...
];

const CategoryCard = ({ title, description, iconColor, path, viewBox }) => (
  <div className="flex flex-col items-center space-y-2 p-5 bg-white shadow-xl rounded-xl border border-transparent hover:border-gray-200 transition-all duration-300">
    <div className="h-[50px] w-[50px] flex items-center justify-center rounded-md bg-gray-600 p-2">
      <svg width="24" height="24" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={path} fill={iconColor}></path>
      </svg>
    </div>
    <p className="text-xl font-bold text-gray-800">{title}</p>
    <p className="text-center text-gray-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const CategorySection = () => {
  return (
    <section aria-label="category" className="my-4 bg-white px-4">
      <div className="max-w-7xl py-10 mx-auto">
        <p className="mb-8 text-3xl md:text-4xl font-bold text-gray-800 text-center sm:text-left">
          Choice favourite course from top category
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;