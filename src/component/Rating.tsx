"use client";

type OuterRingProps = {
  value: number;
  size: number;
  strokeWidth?: number;
  color: string;
  children: React.ReactNode;
};

function OuterRing({
  value,
  size,
  strokeWidth = 2,
  color,
  children,
}: OuterRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90 absolute">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      {children}
    </div>
  );
}

export default function Rating() {
  return (
    <div className="relative  flex justify-center items-center h-80 sm:h-72 md:h-60 scale-80 sm:scale-100">
      <div className="absolute top-10 -right-12 sm:top-8 sm:right-6 md:top-15 md:-right-1">
        <OuterRing value={70} size={190} color="#F97316">
          <div
            className="flex flex-col items-center justify-center bg-[#F97316]/90 w-44 h-44 rounded-full text-white shadow-md"
           
          >
            <span className="text-lg font-bold">85%</span>
            <span className="text-xs">Food Taste</span>
          </div>
        </OuterRing>
      </div>

      <div className="absolute top-3 -left-5 sm:bottom-9 md:-top-1 md:left-16">
        <OuterRing value={70} size={125} color="#8B5CF6">
          <div
            className="flex flex-col items-center justify-center bg-[#8B5CF6]/80 w-28 h-28 rounded-full text-white shadow-md"
          >
            <span className="text-lg font-bold">85%</span>
            <span className="text-xs">Hygiene</span>
          </div>
        </OuterRing>
      </div>

      <div className="absolute bottom-7 -left-17 sm:-bottom-10 sm:left-20 md:-bottom-3 md:-left-6">
        <OuterRing value={70} size={150} color="#06B6D4">
          <div
            className="flex flex-col items-center justify-center bg-[#06B6D4]/90 w-32 h-32 rounded-full text-white shadow-md"
          >
            <span className="text-lg font-bold">95%</span>
            <span className="text-xs">Packaging</span>
          </div>
        </OuterRing>
      </div>
    </div>
  );
}
