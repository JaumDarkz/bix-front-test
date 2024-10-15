import { FC } from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Transaction } from '@/lib/dto';

interface DynamicPieChartProps {
  data: Transaction[];
}

const DynamicPieChart: FC<DynamicPieChartProps> = ({ data }) => {
  const transactionTypes = ['deposit', 'withdraw'];

  const counts = transactionTypes.map(
    (type) => data.filter((transaction) => transaction.transaction_type === type).length
  );

  const chartData = transactionTypes.map((type, index) => ({
    name: type.charAt(0).toUpperCase() + type.slice(1),
    value: counts[index],
  }));

  const COLORS = ['#4bc0c0', '#ff6384'];

  return (
    <RechartsPieChart width={400} height={400}>
      <Pie
        data={chartData}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </RechartsPieChart>
  );
};

export default DynamicPieChart;