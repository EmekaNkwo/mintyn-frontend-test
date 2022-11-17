import React from "react";
import { BiSearch } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { tableData } from "../../data/dummy";
import "./Payments.scss";

const Payments = () => {
  return (
    <div className="payments">
      <span className="payment_header">Payments</span>
      <div className="payment_table">
        <div className="table_header">
          <div className="entries">
            <span>Showing </span>
            <select className="entry_number">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <span> out of 500 payments</span>
          </div>
          <div className="search">
            <BiSearch />
            <input type="text" placeholder="search" />
          </div>

          <div className="filter">
            Show{" "}
            <select className="selection">
              <option value="all">All</option>
              <option value="all">Reconcilied</option>
              <option value="all">Un-reconciled</option>
              <option value="all">Settled</option>
              <option value="all">Unsettled</option>
            </select>
          </div>
        </div>

        <div className="table_data">
          <table>
            <thead>
              <tr>
                <th>Item Type</th>
                <th>Price</th>
                <th>Transaction No</th>
                <th>Time</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <span className="table_avatar">{item.pic}</span>
                      {item.productName}
                    </td>
                    <td>{item.price}</td>
                    <td>{item.transaction_no}</td>
                    <td>{item.time}</td>
                    <td>
                      {item.status === "pending" ? (
                        <>
                          <span className="pending">
                            <GoPrimitiveDot />
                            {item.status}
                          </span>
                        </>
                      ) : item.status === "reconciled" ? (
                        <>
                          <span className="reconciled">
                            <GoPrimitiveDot />
                            {item.status}
                          </span>
                        </>
                      ) : item.status === "unreconciled" ? (
                        <>
                          <span className="unreconciled">
                            <GoPrimitiveDot />
                            {item.status}
                          </span>
                        </>
                      ) : item.status === "settled" ? (
                        <span className="settled">
                          <GoPrimitiveDot />
                          {item.status}
                        </span>
                      ) : (
                        "null"
                      )}
                    </td>
                    <td>
                      <MdKeyboardArrowDown className="action" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
