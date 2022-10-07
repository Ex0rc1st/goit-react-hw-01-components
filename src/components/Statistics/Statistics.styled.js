import styled from '@emotion/styled';

export const StatisticHeader = styled.h2`
  padding: 25px 0;
  color: #4f585e;
  text-align: center;
  font-size: 1rem;
  text-transform: uppercase;
`;

export const StatSection = styled.section`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  margin-top: 15px;
  border-radius: 5px;
  background-color: #ffffff;
  overflow: hidden;
`;

export const StatList = styled.ul`
  margin: 0;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  width: 60px;
  height: 45px;
  padding: 5px;
  text-align: center;
  color: #ffffff;
`;

export const StatLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

export const StatValue = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
