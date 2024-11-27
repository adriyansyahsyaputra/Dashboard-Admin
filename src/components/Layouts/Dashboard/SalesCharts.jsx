import React from "react";
import PropTypes from "prop-types";
import {
  Area,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data untuk grafik penjualan produk perminggu
const salesData = [
  { week: "Minggu 1", sales: 450, trend: 420 },
  { week: "Minggu 2", sales: 680, trend: 650 },
  { week: "Minggu 3", sales: 520, trend: 540 },
  { week: "Minggu 4", sales: 750, trend: 730 },
  { week: "Minggu 5", sales: 620, trend: 640 },
  { week: "Minggu 6", sales: 880, trend: 850 },
];

export default function SalesCharts() {

  return (
    <>
      {/* Total Penjualan Produk Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6 border">
        <h3 className="text-lg font-semibold mb-4">
          Total Penjualan Produk Perminggu
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={salesData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="week" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Area
                type="monotone"
                dataKey="sales"
                name="Penjualan"
                fill="url(#colorSales)"
                stroke="#6366f1"
                strokeWidth={2}
                animationBegin={0}
                animationDuration={2000}
              />
              <Line
                type="monotone"
                dataKey="trend"
                name="Trend"
                stroke="#c026d3"
                strokeWidth={2}
                dot={{ stroke: "#c026d3", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
                animationBegin={1000}
                animationDuration={1500}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}


  // Custom Tooltip Component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Validasi Props dengan PropTypes
  CustomTooltip.propTypes = {
    active: PropTypes.bool, // `active` harus berupa boolean
    payload: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        color: PropTypes.string,
      })
    ),
    label: PropTypes.string,
  };