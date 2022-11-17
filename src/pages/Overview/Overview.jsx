import { Orders, Widget } from "../../components";
import "./overview.scss";

const Overview = () => {
  return (
    <div className="overview_container">
      <Widget />
      <Orders />
    </div>
  );
};

export default Overview;
