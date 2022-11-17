import { Orders, Payments, Widget } from "../../components";
import "./overview.scss";

const Overview = () => {
  return (
    <div className="overview_container">
      <Widget />
      <Orders />
      <Payments />
    </div>
  );
};

export default Overview;
