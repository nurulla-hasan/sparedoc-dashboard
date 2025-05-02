'use client';
import { useState } from 'react';
import {
    ResponsiveContainer, AreaChart, Area, XAxis, YAxis,
    Tooltip, CartesianGrid,
    Customized
} from 'recharts';

const chartData = {
    2025: [
        { name: "Jan", value: 10000 },
        { name: "Feb", value: 25000 },
        { name: "Mar", value: 42000 },
        { name: "Apr", value: 60000 },
        { name: "May", value: 68000 },
        { name: "Jun", value: 50000 },
        { name: "Jul", value: 40000 },
        { name: "Aug", value: 48000 },
        { name: "Sept", value: 53000 },
        { name: "Oct", value: 62000 },
        { name: "Nov", value: 71000 },
        { name: "Dec", value: 85000 },
    ],
    2024: [
        { name: "Jan", value: 60000 },
        { name: "Feb", value: 15000 },
        { name: "Mar", value: 42000 },
        { name: "Apr", value: 80000 },
        { name: "May", value: 18000 },
        { name: "Jun", value: 90000 },
        { name: "Jul", value: 20000 },
        { name: "Aug", value: 88000 },
        { name: "Sept", value: 73000 },
        { name: "Oct", value: 42000 },
        { name: "Nov", value: 21000 },
        { name: "Dec", value: 15000 },
    ],
};

export default function TotalEarningChart() {
    const [selectedYear, setSelectedYear] = useState('2025');

    return (
        <div className="border border-[#F27405] rounded-md p-4 w-full bg-white">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-base font-semibold text-[#555555]">Total earning growth</h2>
                <div className="relative w-fit">
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="appearance-none border border-gray-400 outline-none rounded px-2 py-[4px] text-[12px] pr-6">
                        <option>2025</option>
                        <option>2024</option>
                    </select>
                    <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2">
                        <svg className="w-[12px] h-[12px] text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={250}>
                <AreaChart
                    data={chartData[selectedYear]}
                    margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                >
                    <CartesianGrid horizontal={true} vertical={false} strokeDasharray="1 1" />

                    <defs>
                        <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F27405" stopOpacity={0.7} />
                            <stop offset="95%" stopColor="#F27405" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis
                        dataKey="name"
                        tick={{ fontSize: 12 }}
                        axisLine={false} tickLine={false} />
                    <YAxis
                        tickFormatter={(value) => value === 0 ? '0' : `${value / 1000}k`}
                        ticks={[0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000]}
                        domain={[0, 100000]}
                        tick={{ fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip formatter={(val) => [`${val}`, "Earning"]} />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#F27405"
                        strokeWidth={2}
                        fill="url(#orangeGradient)"
                        dot={false}
                        activeDot={{ r: 5, stroke: '#F27405', strokeWidth: 2, fill: 'white' }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
