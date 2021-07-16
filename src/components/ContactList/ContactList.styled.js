import styled from "@emotion/styled";

export const List = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  margin-top: 35px;

  font-size: 17px;
`;

export const ListItem = styled.li`
  border: 1px solid white;
  border-radius: 5px;
  padding: 8px;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
  & > svg {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;

  background-color: white;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 4px 8px;
  color: var(--text-color-accent);

  font-size: 17px;
  line-height: 20px;
  text-transform: capitalize;

  cursor: pointer;

  transition: all 300ms linear;
  margin-left: auto;

  &:hover,
  &:focus {
    color: #f1f1f2;
    background-color: #444c5c;
    transform: scale(1.03);
  }
  & > svg {
    margin-left: 8px;
  }
`;
