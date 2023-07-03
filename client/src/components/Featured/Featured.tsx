import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import * as CatalogService from "@/services/catalogService";
import { ItemProps } from "@/interfaces/interfaces";

// const mockData: Array<{
//   _id: string;
//   url: string;
//   itemName: string;
//   prices: [{ _id: string; price: number; createdAt: Date }];
//   img: string;
// }> = [
//   {
//     _id: "1",
//     url: "https://example.com/1",
//     itemName: "MackBook Air M2 15.3-inch",
//     prices: [{ _id: "1", price: 1279.97, createdAt: new Date() }],
//     img: "https://images.unsplash.com/photo-1675868374249-da10b594b31d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
//   },
//   {
//     _id: "2",
//     url: "https://example.com/2",
//     itemName: "Synology DS220+",
//     prices: [{ _id: "2", price: 303.85, createdAt: new Date() }],
//     img: "https://images.unsplash.com/photo-1577538926988-7926820ed209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//   },
//   {
//     _id: "3",
//     url: "https://example.com/3",
//     itemName: "Logitech G-Pro Wireless Mouse",
//     prices: [{ _id: "3", price: 69.0, createdAt: new Date() }],
//     img: "https://images.unsplash.com/photo-1616071358409-ef30a44a90bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//   },
//   {
//     _id: "4",
//     url: "https://example.com/4",
//     itemName: "Logitech G-Pro Wireless Mouse",
//     prices: [{ _id: "4", price: 303.85, createdAt: new Date() }],
//     img: "https://images.unsplash.com/photo-1660833638050-41f95d8b94e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
//   },
// ];

type Props = {};

const Featured = (props: Props) => {
  const [data, setData] = useState<ItemProps[]>([]);

  useEffect(() => {
    CatalogService.getAll().then((result) => {
      setData(result);
      
    });
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Latest products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.map((item) => (
            <Card
              key={item._id}
              data={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
