type LinkCardProps = {
  label: string;
  href: string;
  clickCount: number;
  onClick?: () => void;
};

export default function LinkCard({
  label,
  href,
  clickCount,
  onClick,
}: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-sm font-medium text-foreground shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <span>{label}</span>
      <span className="shrink-0 text-xs font-normal text-[#8a7160] dark:text-[#c9b6a4]">
        {clickCount}회
      </span>
    </a>
  );
}
