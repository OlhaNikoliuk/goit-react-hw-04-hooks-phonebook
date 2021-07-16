import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 500px;
  display: block;
  padding: 20px 30px;
  margin: 0 auto;
  margin-top: 40px;

  text-align: center;

  background-color: var(--bg-section);
  color: var(--text-color-main);
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(154, 158, 171, 0.2);

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  display: inline-block;
  align-items: baseline;
  margin: 0;
  margin-bottom: 20px;
  margin-right: 10px;
  font-size: 32px;
  font-weight: 700;

  text-align: center;
`;
