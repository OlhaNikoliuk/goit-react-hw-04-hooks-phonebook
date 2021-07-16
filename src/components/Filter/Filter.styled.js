import styled from "@emotion/styled/macro";

export const FilterInput = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 400px;
  height: 35px;

  border: none;
  border-radius: 4px;
  padding-left: 15px;
  color: #444c5c;

  &:placeholder-shown {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid #444c5c;
    box-shadow: 3px 4px 5px 0px rgb(120 165 163 / 20%);
  }
`;

export const Label = styled.label`
  text-align: start;
  display: inline-block;
  align-items: baseline;

  font-size: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  & input {
    margin-top: 5px;
    width: 400px;
    height: 35px;

    border: none;
    border-radius: 4px;
  }
  & > svg {
    margin-right: 10px;
  }
`;
