import { widgetData, widgetChart } from "../../data/dummy";
import { AreaChart, Area } from "recharts";
import "./widget.scss";

const Widget = () => {
  return (
    <div className="widget">
      {widgetData.map((item, key) => {
        return (
          <div className="widget_item" key={key}>
            <div className="widget_desc">
              <span>{item.title}</span>
              <span className="widget_value">{item.value}</span>
            </div>
            <div className="widget_chart">
              <AreaChart
                width={100}
                height={60}
                data={widgetChart}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#0086e5f3"
                  fill="#0296ffba"
                />
              </AreaChart>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Widget;
