import { FC } from 'react';
import { Transaction } from '@/lib/dto';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: Transaction[];
}

const LineChartComponent: FC<LineChartProps> = ({ data = [] }) => { // Valor padrão para data
  // Para evitar erros ao renderizar, você pode adicionar um retorno condicional
  if (data.length === 0) {
    return <div>No data available</div>; // Mensagem ou outro componente quando não houver dados
  }

  // Transformar os dados em um formato apropriado para o gráfico
  const chartData = data.map((transaction) => ({
    date: transaction.date,
    Deposits: transaction.transaction_type === 'deposit' ? parseFloat(transaction.amount) : 0,
    Withdrawals: transaction.transaction_type === 'withdraw' ? parseFloat(transaction.amount) : 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Deposits" stroke="rgba(75,192,192,1)" />
        <Line type="monotone" dataKey="Withdrawals" stroke="rgba(255,99,132,1)" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
