interface LinearProgressBarProps {
  title: string;
  completed: number;
  total: number;
  barClassName?: string;
  progressClassName?: string;
  className?: string;
}

const LinearProgressBar: React.FC<LinearProgressBarProps> = ({
  title,
  completed,
  total,
  barClassName,
  progressClassName,
  className,
}) => {
  return (
    <div className={`${className ?? ""}`}>
      <div className="flex items-center justify-between">
        <span className="leading-[138%] max-md:text-xs">{title}</span>
        <span className="text-[8px] md:text-[10px]">
          {completed}/{total}
        </span>
      </div>
      <div className={`mt-1.5 h-1 w-full rounded-full relative ${barClassName ?? ""}`}>
        <div
          className={`absolute top-0 left-0 h-1 rounded-full ${progressClassName}`}
          style={{ width: `${(completed / total) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default LinearProgressBar;
