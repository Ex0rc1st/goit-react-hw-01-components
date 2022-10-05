import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  text-align: center;
  border: 1px solid grey;
  border-radius: 8px;
  background-color: #fffaf0;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const UserInfo = styled.p`
  color: grey;
  font-size: 16px;
  font-weight: 500;
`;

export const DescriptionWrapper = styled.div`
  padding-top: 24px;
  padding-bottom: 10px;
`;

export const StatsWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 0;
  margin: 0;
  background-color: lightgray;
`;

export const StatsItem = styled.li`
  list-style: none;
  /* border-style: inset;
  border-color: grey; */
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const StatName = styled.span`
  display: block;
  color: grey;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const Quantity = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
`;
