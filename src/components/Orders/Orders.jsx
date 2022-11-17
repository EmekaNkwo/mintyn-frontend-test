import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { orderData } from "../../data/dummy";
import "./orders.scss";

const Orders = () => {
  return (
    <div className="orders">
      <div className="today_orders">
        <div className="order_header">
          <span className="order_title">Today: 5, Aug 2018</span>
          <div className="order_controls">
            <select>
              <option value="today">1 Jan - 1 Jun</option>
              <option value="yesterday">others</option>
            </select>
            <div className="order_buttons">
              <button>
                <MdKeyboardArrowLeft />
              </button>
              <button>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="order_table">
          <AreaChart
            width={1100}
            height={350}
            data={orderData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#0086e5f3"
              fill="#0296ffba"
            />
          </AreaChart>
        </div>
      </div>
      <div className="data_right">
        <div className="values">
          <span className="value_title">Orders</span>
          <progress value="80" max="100">
            33%
          </progress>
          <span>
            Pending Orders: <b className="pending_value">20</b>
          </span>
          <span>
            Reconciled Orders: <b className="reconciled_value">80</b>
          </span>
          <span>
            Total Orders: <b className="total_value">100</b>
          </span>
        </div>
        <div className="values">
          <span className="value_title">Payments</span>
          <progress value="80" max="100">
            33%
          </progress>
          <span>
            Un-reconcilied Payments: <b className="pending_value">20</b>
          </span>
          <span>
            Reconciled Payments: <b className="reconciled_value">80</b>
          </span>
          <span>
            Total Payments: <b className="total_value">100</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Orders;
