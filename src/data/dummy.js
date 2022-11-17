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
    value: "2,342",
  },
  {
    title: "Total Transaction Volume",
    value: "2,342",
  },
  {
    title: "Total Transaction Volume",
    value: "2,342",
  },
];
