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

// Data untuk grafik pendapatan dan pengeluaran
const financialData = [
  { week: "Minggu 1", pendapatan: 15000, pengeluaran: 8000, profit: 7000 },
  { week: "Minggu 2", pendapatan: 18000, pengeluaran: 9500, profit: 8500 },
  { week: "Minggu 3", pendapatan: 16500, pengeluaran: 8800, profit: 7700 },
  { week: "Minggu 4", pendapatan: 21000, pengeluaran: 10200, profit: 10800 },
  { week: "Minggu 5", pendapatan: 19500, pengeluaran: 9800, profit: 9700 },
  { week: "Minggu 6", pendapatan: 23000, pengeluaran: 11000, profit: 12000 },
];

export default function FinancialCharts() {

  return (
    <>
      {/* Pendapatan dan Pengeluaran Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6 border">
        <h3 className="text-lg font-semibold mb-4">
          Pendapatan dan Pengeluaran Perminggu
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={financialData}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis dataKey="week" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Area
                type="monotone"
                dataKey="pendapatan"
                name="Pendapatan"
                fill="url(#colorIncome)"
                stroke="#10b981"
                strokeWidth={2}
                animationBegin={0}
                animationDuration={2000}
              />
              <Area
                type="monotone"
                dataKey="pengeluaran"
                name="Pengeluaran"
                fill="url(#colorExpense)"
                stroke="#f43f5e"
                strokeWidth={2}
                animationBegin={500}
                animationDuration={2000}
              />
              <Bar
                dataKey="profit"
                name="Profit"
                fill="#8b5cf6"
                radius={[4, 4, 0, 0]}
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
