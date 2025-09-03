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
        relative flex justify-center items-center w-full h-[280px] sm:h-[350px] md:h-[420px] scale-75 sm:scale-90 md:scale-100 transition-transform
      "
    >
      <div className="absolute right-8 ">
        <OuterRing value={70} size={160} color="#F97316">
          <div className="flex flex-col items-center justify-center bg-[#F97316]/90 w-35 h-35 rounded-full text-white shadow-md">
            <span className="text-xl font-bold">85%</span>
            <span className="text-sm">Food Taste</span>
          </div>
        </OuterRing>
        <div className=" absolute bottom-20 -left-8 ">
         <OuterRing value={72} size={110} color="#8B5CF6">
          <div className="flex flex-col items-center justify-center bg-[#8B5CF6]/80 w-22 h-22 rounded-full text-white shadow-md">
            <span className="text-lg font-bold">85%</span>
            <span className="text-xs">Hygiene</span>
          </div>
        </OuterRing>
        </div>
      <div className=" absolute -bottom-8 -left-25 ">
        <OuterRing value={72} size={120} color="#06B6D4">
          <div className="flex flex-col items-center justify-center bg-[#06B6D4]/90 w-26 h-26 rounded-full text-white shadow-md">
            <span className="text-lg font-bold">92%</span>
            <span className="text-xs">Packaging</span>
          </div>
        </OuterRing>
        </div>
      </div>
    </div>
  );
}
