import {DonutChart} from 'react-circle-chart'

type Item = {
  value: number
  label: string
  color?: '#7DB059'
}

type DonutChartProps = {
  items?: Item[];
  roundedCaps?: boolean;
  size?: "sm" | "md" | "lg" | number;
  trackWidth?: "sm" | "md" | "lg";
  trackColor?: string;
  showTotal?: boolean;
  totalFontSize?: string;
  totalTextColor?: string;
  tooltipColor?: string;
  backgroundTooltipColor?: string;
  tooltipFontSize?: string;
}

const chartConfig: DonutChartProps = {
  size:100,
  trackColor: '#DF8445',
  totalFontSize:'16px',
  trackWidth: 'sm',
  roundedCaps: false,
  tooltipFontSize: '12px'
}


export default function Chart(item: Item) {
  return(
    <DonutChart {...chartConfig} items={[item]}></DonutChart>
  );
}