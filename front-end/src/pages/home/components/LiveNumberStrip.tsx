import { span } from 'framer-motion/client';

interface LiveNumberStripProps {
  count?: number;
  percent?: number;
  rating?: number;
  title: string;
  subTitle: string;
}

const LiveNumberStrip = ({
  percent,
  rating,
  count,
  title,
  subTitle,
}: LiveNumberStripProps) => {
  return (
    <div className="max-w-65 border p-2">
      <h3 className="text-text-highlight font-bold text-[40px] leading-12 tracking-[-0.6px] tabular-nums">
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
            {rating} <span>/ 5</span>
          </div>
        )}
      </h3>
      <p className=" text-text-secondary uppercase text-[14px] font-semibold leading-5 tracking-[0.7px] text-pretty py-0.5">
        {title}
      </p>
      <p className="text-text-muted text-[14px] leading-4 font-medium text-pretty">
        {subTitle}
      </p>
    </div>
  );
};

export default LiveNumberStrip;
