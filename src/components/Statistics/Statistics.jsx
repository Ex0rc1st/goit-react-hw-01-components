import PropTypes from 'prop-types';
import { generateRandomColor } from '../utils/GetRandomColor';
import {
  StatSection,
  StatisticHeader,
  StatList,
  StatItem,
  StatLabel,
  StatValue,
} from './Statistics.styled.js';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      <StatisticHeader>{title}</StatisticHeader>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem
            key={id}
            style={{
              backgroundColor: generateRandomColor(),
            }}
          >
            <StatLabel>{label}</StatLabel>
            <StatValue>{percentage}%</StatValue>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
