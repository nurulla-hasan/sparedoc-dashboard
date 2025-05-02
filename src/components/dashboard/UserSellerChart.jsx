'use client';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid,
} from 'recharts';
import { useState } from 'react';

const chartData = {
  2024: [
    { name: 'Jan', users: 1500, sellers: 1000 },
    { name: 'Feb', users: 2000, sellers: 1800 },
    { name: 'Mar', users: 2500, sellers: 2300 },
    { name: 'Apr', users: 3000, sellers: 2900 },
    { name: 'May', users: 4000, sellers: 3500 },
    { name: 'Jun', users: 3800, sellers: 2800 },
    { name: 'Jul', users: 3000, sellers: 2700 },
    { name: 'Aug', users: 500, sellers: 5000 },
    { name: 'Sept', users: 2400, sellers: 2200 },
    { name: 'Oct', users: 3500, sellers: 3000 },
    { name: 'Nov', users: 3800, sellers: 3400 },
    { name: 'Dec', users: 4800, sellers: 4100 },
  ],
  2023: [
    { name: 'Jan', users: 5000, sellers: 3000 },
    { name: 'Feb', users: 3400, sellers: 1100 },
    { name: 'Mar', users: 4800, sellers: 1600 },
    { name: 'Apr', users: 2000, sellers: 1700 },
    { name: 'May', users: 2600, sellers: 2100 },
    { name: 'Jun', users: 2300, sellers: 1800 },
    { name: 'Jul', users: 2000, sellers: 1600 },
    { name: 'Aug', users: 1000, sellers: 1660 },
    { name: 'Sept', users: 2200, sellers: 1800 },
    { name: 'Oct', users: 2800, sellers: 2200 },
    { name: 'Nov', users: 3000, sellers: 2500 },
    { name: 'Dec', users: 3500, sellers: 3000 },
  ],
};

export default function UserSellerChart() {
  const [selectedYear, setSelectedYear] = useState('2024');

  return (
    <div className="border border-[#F27405] rounded-md p-4 w-full bg-white">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-base font-semibold text-[#555555]">Total Users & Sellers</h2>
        <div className="relative w-fit">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="appearance-none border border-gray-400 outline-none rounded px-2 py-[4px] text-[12px] pr-6">
            <option>2024</option>
            <option>2023</option>
          </select>
          <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2">
            <svg className="w-[12px] h-[12px] text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={chartData[selectedYear]}
          margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
        >
          {/* X-axis only dashed grid */}
          <CartesianGrid horizontal={true} vertical={false} strokeDasharray="0 0" />

          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(value) => (value === 0 ? '0' : `${value / 1000}k`)}
            domain={[0, 5000]}
            ticks={[0, 1000, 2000, 3000, 4000, 5000]}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />
          <Legend
            iconType="circle"
            layout="horizontal"
            align="left" 
            verticalAlign="top"
            wrapperStyle={{
              position: 'absolute',
              top: -30,
              right: 70,
              fontSize: '12px',
              width: "128px"

            }}
          />

          <Bar dataKey="users" fill="#F27405" name="Users" />
          <Bar dataKey="sellers" fill="#00B047" name="Sellers" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}
