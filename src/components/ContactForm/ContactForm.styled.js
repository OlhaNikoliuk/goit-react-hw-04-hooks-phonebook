import styled from "@emotion/styled/macro";

export const CustomForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  display: inline-block;
  align-items: baseline;
  text-align: start;
  font-size: 20px;
  margin-bottom: 20px;

  & > svg {
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 400px;
  height: 35px;

  border: none;
  border-radius: 4px;
  padding-left: 15px;
  color: #444c5c;

  /* background-color: #9a9eab; */

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

export const Button = styled.button`
  display: block;
  background-color: white;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 8px 16px;
  color: #ec96a4;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;

  cursor: pointer;

  margin: 0 auto;
  margin-top: 15px;
  transition: all 300ms linear;

  &:hover,
  &:focus {
    color: #f1f1f2;
    background-color: #444c5c;
    transform: scale(1.03);
  }
`;

export const ErrorMsg = styled.div`
  font-size: 14px;
  color: var(--notification-color);
  margin-bottom: 10px;
`;
