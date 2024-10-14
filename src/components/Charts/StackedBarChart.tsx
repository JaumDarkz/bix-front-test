import { FC } from 'react';
import { Transaction } from '@/lib/dto';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface StackedBarChartProps {
  data: Transaction[];
}

const StackedBarChart: FC<StackedBarChartProps> = ({ data = [] }) => { // Valor padrão para data
  if (data.length === 0) {
    return <div>No data available</div>; // Mensagem ou outro componente quando não houver dados
  }

  const states = Array.from(new Set(data.map((transaction) => transaction.state)));

  // Criar um objeto para armazenar os dados de depósitos e retiradas por estado
  const chartData = states.map((state) => {
    const depositAmount = data
      .filter((transaction) => transaction.transaction_type === 'deposit' && transaction.state === state)
      .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

    const withdrawAmount = data
      .filter((transaction) => transaction.transaction_type === 'withdraw' && transaction.state === state)
      .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

    return {
      state,
      Deposits: depositAmount,
      Withdrawals: withdrawAmount,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={chartData}>
        <XAxis dataKey="state" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Deposits" stackId="a" fill="rgba(75,192,192,1)" />
        <Bar dataKey="Withdrawals" stackId="a" fill="rgba(255,99,132,1)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
