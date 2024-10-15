import { FC } from 'react';
import { Transaction } from '@/lib/dto';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

interface LineChartProps {
  data: Transaction[];
}

const LineChartComponent: FC<LineChartProps> = ({ data = [] }) => {
  if (data.length === 0) {
    return <div>No data available, please reconfigure the filters...</div>; 
  }

  const sortedData = data.sort((a, b) => a.date - b.date);

  const chartData = sortedData.map((transaction) => ({
    date: new Date(transaction.date).toISOString().split('T')[0],
    Deposits: transaction.transaction_type === 'deposit' ? parseFloat(transaction.amount) : 0,
    Withdrawals: transaction.transaction_type === 'withdraw' ? parseFloat(transaction.amount) : 0,
  }));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${day}/${month}`;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={formatDate} />
        <YAxis />
        <Tooltip formatter={(value: number) => value.toFixed(2)} />
        <Legend />
        <Line type="monotone" dataKey="Deposits" stroke="rgba(75,192,192,1)" />
        <Line type="monotone" dataKey="Withdrawals" stroke="rgba(255,99,132,1)" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
