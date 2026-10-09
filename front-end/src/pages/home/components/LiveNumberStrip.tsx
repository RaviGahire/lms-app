interface LiveNumberStripProps {
  count?: number;
  percent?: number;
  rating?: number;
  title: string;
  subTitle: string;
}

export const LiveNumberStrip = ({
  percent,
  rating,
  count,
  title,
  subTitle,
}: LiveNumberStripProps) => {
  return (
   <div className="w-full max-w-full sm:max-w-60 md:max-w-65 border p-3 sm:p-4 md:p-5">
  <h3 className="text-text-highlight font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight md:leading-12 tracking-[-0.6px] tabular-nums">
    {count}
    {count && <span>+</span>}
    {percent && (
      <div>
        {percent}
        <span>%</span>
      </div>
    )}
    {rating && (
      <div>
        {rating} <span className="text-base sm:text-xl md:text-2xl font-normal">/ 5</span>
      </div>
    )}
  </h3>

  <p className="text-text-secondary uppercase text-xs sm:text-[13px] md:text-[14px] font-semibold leading-4 sm:leading-5 tracking-[0.7px] text-pretty py-0.5 sm:py-1">
    {title}
  </p>

  <p className="text-text-muted text-xs sm:text-[13px] md:text-[14px] leading-4 md:leading-5 font-medium text-pretty">
    {subTitle}
  </p>
</div>
  );
};

