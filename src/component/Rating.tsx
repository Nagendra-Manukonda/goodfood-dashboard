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
    <div
      className="
        relative flex justify-center items-center 
        w-full h-[280px] sm:h-[350px] md:h-[420px]
        scale-75 sm:scale-90 md:scale-100
        transition-transform
      "
    >
      <div className="absolute right-10 sm:right-14 ">
        <OuterRing value={60} size={180} color="#F97316">
          <div className="flex flex-col items-center justify-center bg-[#F97316]/90 w-40 h-40 rounded-full text-white shadow-md">
            <span className="text-xl font-bold">85%</span>
            <span className="text-sm">Food Taste</span>
          </div>
        </OuterRing>
      </div>

      <div className="absolute -top-1 left-15 sm:top-20 sm:left-18 z-10">
        <OuterRing value={72} size={120} color="#8B5CF6">
          <div className="flex flex-col items-center justify-center bg-[#8B5CF6]/80 w-24 h-24 rounded-full text-white shadow-md">
            <span className="text-lg font-bold">85%</span>
            <span className="text-xs">Hygiene</span>
          </div>
        </OuterRing>
      </div>

      <div className="absolute bottom-6 -left-8 sm:bottom-18 sm:left-1 z-10">
        <OuterRing value={72} size={140} color="#06B6D4">
          <div className="flex flex-col items-center justify-center bg-[#06B6D4]/90 w-28 h-28 rounded-full text-white shadow-md">
            <span className="text-lg font-bold">92%</span>
            <span className="text-xs">Packaging</span>
          </div>
        </OuterRing>
      </div>
    </div>
  );
}
