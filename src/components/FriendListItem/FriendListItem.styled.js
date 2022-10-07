import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 0;
  margin-top: 8px;

  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);

  opacity: 1;
  transition: opacity 250ms linear;

  cursor: pointer;
`;

export const Status = styled.span`
  margin: 0 15px;
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-left: 15px;
`;
