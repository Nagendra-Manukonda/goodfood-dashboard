import Image from 'next/image';
import React from 'react'

type Item = {
  id: string | number;
  name: string;
  image: string;
  amount: string | number;
};


const data: Item[]  = [
  {
    id: 0,
    name: 'Fresh Salad Bowl',
    image: '/Group 245.png',
    amount: 'IDR 45.000',
  },
  {
    id: 1,
    name: 'Chicken Noodles',
    image: '/image 4.png',
    amount: 'IDR 75.000',
  },
  {
    id: 2,
    name: 'Smoothie Fruits',
    image: '/image 6 (1).png',
    amount: 'IDR 45.000',
  },
  {
    id: 3,
    name: 'Hot Chicken Wings',
    image: '/image 5.png',
    amount: 'IDR 45.000',
  },
]

export default function MostOrdered() {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full">
  <div className="space-y-4">
    {data.map((item: Item) => (
      <div
        key={item.id}
        className="flex items-center justify-between border-b pb-2 last:border-b-0"
      >
        <div className="flex items-center space-x-3">
          <Image src={item.image}
            alt={item.name}
            width={40}
            height={40}  
            className="w-10 h-10 rounded-full object-cover"  />
        
          <span className="text-sm text-[#273240] font-medium">{item.name}</span>
        </div>
        <span className="text-sm text-gray-600">{item.amount}</span>
      </div>
    ))}
  </div>
</div>

  )
}

