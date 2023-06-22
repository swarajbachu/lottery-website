// column.tsx

import { ColumnDef } from "@tanstack/react-table";


export type TableData = {
  date: string;
  drawTime: string;
  coupon: string;
  result: string;
  couponName: string;
  couponResult: string;
};




export const  Columns:ColumnDef<TableData>[]= [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "drawTime",
    header: "Draw Time",
  },
  {
    accessorKey: "coupon",
    header: "Coupon",
  },
  {
    accessorKey: "result",
    header: "Result",
  },
  {
    accessorKey: "couponName",
    header: "Coupon Name",
  },
  {
    accessorKey: "couponResult",
    header: "Coupon Result",
  }
]




export const data = [
  {
    date: "06-22-2023",
    drawTime: "12:00 PM",
    coupon: "A",
    result: "4",
    couponName: "Coupon A",
    couponResult: "Win",
  },
  // ... other rows
];
