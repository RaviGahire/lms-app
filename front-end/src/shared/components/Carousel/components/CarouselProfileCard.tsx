interface ProfileCardProps {
  imageSrc: string;
  name: string;
  role: string;
  achievement: string;
}

export const CarouselProfileCard = ({
  imageSrc,
  name,
  role,
  achievement,
}: ProfileCardProps) => {
  return (
    <div className="text-pretty relative w-64 h-102.5 shrink-0 overflow-hidden rounded-2xl border border-subtle bg-card/50 p-4 flex flex-col justify-end items-center text-center shadow-2xl select-none group transition-all duration-300 hover:border-white/20">
      {/* Background Portrait Image */}
      <div className="absolute inset-0 flex items-start justify-center pt-8 ">
        <img
          src={imageSrc}
          alt={name}
          loading="lazy"
          className="w-48 h-56 object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Smooth Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-[#070b19] via-[#070b19]/80 via-40% to-transparent pointer-events-none" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Name */}
        <h3 className="text-xl font-medium text-highlight text-shadow-2xs tracking-wide leading-tight">
          {name}
        </h3>

        {/* Role & Achievement */}
        <p className="mt-2 text-xs font-normal text-success-dark leading-relaxed ">
          {role}
        </p>
        <p className="text-xs font-normal text-muted leading-relaxed">
          {achievement}
        </p>
      </div>
    </div>
  );
};
