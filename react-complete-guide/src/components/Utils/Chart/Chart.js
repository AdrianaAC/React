import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPtValues = props.dataPts.map((dataPt) => dataPt.value);
  const totalMax = Math.max(...dataPtValues);
  return (
    <div className="chart">
      {props.dataPts.map((dataPt) => (
        <ChartBar value={dataPt.value} maxValue={totalMax} label={dataPt.label} key={dataPt.label}/>
      ))}
    </div>
  );
};

export default Chart;
