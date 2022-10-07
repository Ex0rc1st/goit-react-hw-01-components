import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  text-align: center;
  border-radius: 8px 8px 8px 8px;
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
  border: 1px solid grey;
  border-radius: 8px 8px 0px 0px;
`;

export const StatsWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  padding-left: 0;
  margin: 0;
  background-color: lightgray;
  border: 1px solid grey;
  border-top-style: none;
  border-radius: 0px 0px 8px 8px;
`;

export const StatsItem = styled.li`
  list-style: none;
  border-left: 1px solid grey;
  padding-top: 16px;
  padding-bottom: 16px;

  :first-of-type {
    border-left: none;
  }
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
