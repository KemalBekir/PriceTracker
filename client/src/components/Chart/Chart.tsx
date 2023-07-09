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
      <div className="custom-legend text-center mt-1">
        <span className="legend-icon" style={{ backgroundColor: "#8884d8" }} />
        <span className="legend-label font-bold">{itemName.substring(0,30)}</span>
      </div>
    );
  };

  return (
    <div className="flex justify-center">
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend content={<CustomLegend />} />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Chart;
