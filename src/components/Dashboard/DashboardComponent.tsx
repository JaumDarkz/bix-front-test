import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';
import StackedBarChart from '../Charts/StackedBarChart';
import FilterComponent from '../Filters/FilterComponent';
import { useFilter } from '../../contexts/FilterContext';
import { Chart, ChartsContainer, ChartTitle, DashboardContainer, InfoContainer } from './DashboardComponent.styles';
import OverviewCard from './components/OverviewCard/OverviewCard';
import Image from 'next/image';
import { transactionsIcon } from '@/lib/constants';

const DashboardComponent = () => {
  const { filteredData } = useFilter();

  return (
    <DashboardContainer>
      <ChartsContainer>
        <Chart>
          <ChartTitle><Image src={transactionsIcon} alt='Icon' height={24} width={24} /> Transactions</ChartTitle>
            <LineChart data={filteredData} />
        </Chart>

        <Chart>
          <ChartTitle>Transactions by State</ChartTitle>
          <StackedBarChart data={filteredData} />
        </Chart>

        <Chart>
          <ChartTitle>Volume</ChartTitle>
          <PieChart data={filteredData} />
        </Chart>
      </ChartsContainer>

      <InfoContainer>
        <OverviewCard />
        <FilterComponent />
      </InfoContainer>
    </DashboardContainer>
  );
};

export default DashboardComponent;