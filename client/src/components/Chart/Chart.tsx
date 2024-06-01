import { DataProps, Price } from "@/interfaces/interfaces";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  data: Price[];
  itemName: string;
}

const Chart: React.FC<ChartProps> = ({ data, itemName }) => {
  const chartData = data.map((priceObj) => ({
    price: priceObj.price,
    date: new Date(priceObj.createdAt).toLocaleDateString(),
  }));

  const CustomLegend = () => {
    return (
      <div className="custom-legend mt-1 text-center">
        <span className="legend-icon" style={{ backgroundColor: "#8884d8" }} />
        <span className="legend-label font-bold">
          {itemName.substring(0, 35)}...
        </span>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center">
      <ResponsiveContainer width="95%" height={300}>
        <LineChart   data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend content={<CustomLegend />} />
          <Line type="monotone" dataKey="price" stroke="#000000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
