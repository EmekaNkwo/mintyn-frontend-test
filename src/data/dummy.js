import {
  all_orders,
  all_payments,
  manual,
  overview,
  pending_orders,
  profile,
  reconciled_orders,
  reconciled_payments,
  unreconciled_payments,
} from "./images";

export const sideBarLinks = [
  {
    title: "Main",
    links: [
      {
        name: "Overview",
        link: "/",
        icon: overview,
      },
    ],
  },

  {
    title: "Payments",
    links: [
      {
        name: "All Payments",
        link: "#!",
        icon: all_payments,
      },
      {
        name: "Reconcilied Payments",
        link: "#!",
        icon: reconciled_payments,
      },
      {
        name: "Un-Reconcilied Payments",
        link: "#!",
        icon: unreconciled_payments,
      },
      {
        name: "Manual Settlement",
        link: "#!",
        icon: manual,
      },
    ],
  },
  {
    title: "Orders",
    links: [
      {
        name: "All Orders",
        link: "#!",
        icon: all_orders,
      },
      {
        name: "Pending Orders",
        link: "#!",
        icon: pending_orders,
      },
      {
        name: "Reconciled Orders",
        link: "#!",
        icon: reconciled_orders,
      },
      {
        name: "Merchant Profile",
        link: "#!",
        icon: profile,
      },
    ],
  },
];

export const widgetData = [
  {
    title: "Daily Transaction Volume",
    value: "2,342",
  },
  {
    title: "Daily Transaction Value",
    value: "#4,000,000",
  },
  {
    title: "Total Transaction Volume",
    value: "452,000",
  },
  {
    title: "Total Transaction Volume",
    value: "#4,000,000",
  },
];

export const widgetChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const orderData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const tableData = [
  {
    pic: "ww",
    productName: "Apple Mac Book 15' 250 SSD 12GB",
    price: "$73430",
    transaction_no: "1234567890",
    time: "12:30",
    status: "pending",
  },
  {
    pic: "ww",
    productName: "Apple Mac Book 15' 250 SSD 12GB",
    price: "$73430",
    transaction_no: "1234567890",
    time: "12:30",
    status: "reconciled",
  },
  {
    pic: "ww",
    productName: "Apple Mac Book 15' 250 SSD 12GB",
    price: "$73430",
    transaction_no: "1234567890",
    time: "12:30",
    status: "reconciled",
  },
  {
    pic: "ww",
    productName: "Apple Mac Book 15' 250 SSD 12GB",
    price: "$73430",
    transaction_no: "1234567890",
    time: "12:30",
    status: "pending",
  },
  {
    pic: "ww",
    productName: "Apple Mac Book 15' 250 SSD 12GB",
    price: "$73430",
    transaction_no: "1234567890",
    time: "12:30",
    status: "unreconciled",
  },
  {
    pic: "ww",
    productName: "Apple Mac Book 15' 250 SSD 12GB",
    price: "$73430",
    transaction_no: "1234567890",
    time: "12:30",
    status: "reconciled",
  },
  {
    pic: "ww",
    productName: "Apple Mac Book 15' 250 SSD 12GB",
    price: "$73430",
    transaction_no: "1234567890",
    time: "12:30",
    status: "unreconciled",
  },
  {
    pic: "ww",
    productName: "Apple Mac Book 15' 250 SSD 12GB",
    price: "$73430",
    transaction_no: "1234567890",
    time: "12:30",
    status: "reconciled",
  },
  {
    pic: "ww",
    productName: "Apple Mac Book 15' 250 SSD 12GB",
    price: "$73430",
    transaction_no: "1234567890",
    time: "12:30",
    status: "reconciled",
  },
  {
    pic: "ww",
    productName: "Apple Mac Book 15' 250 SSD 12GB",
    price: "$73430",
    transaction_no: "1234567890",
    time: "12:30",
    status: "reconciled",
  },
];
