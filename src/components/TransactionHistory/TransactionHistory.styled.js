import styled from '@emotion/styled';

export const TransHistoryTable = styled.table`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border-radius: 5px;
  text-align: center;
  background-color: #ffffff;
  color: #808184;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  overflow: hidden;
`;

export const TransactionHead = styled.thead`
  border: 0px solid #b5b5b5;
  background-color: #00bcd5;
  color: #ffffff;
  text-transform: uppercase;
`;

export const TransactionTitle = styled.th`
  width: 33.3%;
  padding: 15px 5px;
`;

export const TransactionRow = styled.tr`
  :nth-child(even) {
    background-color: #ecf1f4;
  }
  :hover,
  :focus {
    background-color: #c9dcdf;
    transition: background-color 250ms linear;
  }
`;

export const TransactionCell = styled.td`
  padding: 15px 5px;
  text-transform: capitalize;
  transition: background-color 250ms linear;
  cursor: pointer;
`;
