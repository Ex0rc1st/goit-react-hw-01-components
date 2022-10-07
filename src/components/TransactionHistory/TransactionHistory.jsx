import PropTypes from 'prop-types';
import {
  TransHistoryTable,
  TransactionHead,
  TransactionTitle,
  TransactionCell,
  TransactionRow,
} from '../TransactionHistory/TransactionHistory.styled.js';

export const TransactionHistory = ({ items }) => {
  return (
    <TransHistoryTable>
      <TransactionHead>
        <tr>
          <TransactionTitle>Type</TransactionTitle>
          <TransactionTitle>Amount</TransactionTitle>
          <TransactionTitle>Currency</TransactionTitle>
        </tr>
      </TransactionHead>

      <tbody>
        {items.map(item => (
          <TransactionRow key={item.id}>
            <TransactionCell>{item.type}</TransactionCell>
            <TransactionCell>{item.amount}</TransactionCell>
            <TransactionCell>{item.currency}</TransactionCell>
          </TransactionRow>
        ))}
      </tbody>
    </TransHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
