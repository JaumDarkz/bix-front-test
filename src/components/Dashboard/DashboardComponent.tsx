import LineChart from '../Charts/LineChart';
import PieChart from '../Charts/PieChart';
import StackedBarChart from '../Charts/StackedBarChart';
import FilterComponent from '../Filters/FilterComponent';
import { useFilter } from '../../contexts/FilterContext';

const DashboardComponent = () => {
  const { filteredData } = useFilter();

  return (
    <div>
      <h1>Financial Dashboard</h1>
      <FilterComponent />
      <LineChart data={filteredData} />
      <PieChart data={filteredData} />
      <StackedBarChart data={filteredData} />
    </div>
  );
};

export default DashboardComponent;