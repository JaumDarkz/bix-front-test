import { FC } from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Transaction } from '@/lib/dto';

interface PieChartProps {
  data: Transaction[];
}

const PieChart: FC<PieChartProps> = ({ data }) => {
  const transactionTypes = ['deposit', 'withdraw', 'pending'];

  const counts = transactionTypes.map(
    (type) => data.filter((transaction) => transaction.transaction_type === type).length
  );

  const chartData = transactionTypes.map((type, index) => ({
    name: type.charAt(0).toUpperCase() + type.slice(1),
    value: counts[index],
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <RechartsPieChart width={400} height={400}>
      <Pie
        data={chartData}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {chartData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </RechartsPieChart>
  );
};

export default PieChart;
