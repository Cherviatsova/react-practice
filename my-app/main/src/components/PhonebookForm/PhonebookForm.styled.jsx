import styled from '@emotion/styled';

export const FormWrapper = styled.fieldset`
  margin: 0 auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 600px;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 448px;
  padding: 8px 0;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  display: block;
  color: #121779;
`;

export const Input = styled.input`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
`;

export const ErrorText = styled.p`
  margin: -10px 0 10px;
  color: tomato;
`;

export const SubmitBtn = styled.button`
  background-color: #2878ad;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(40, 120, 173) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  min-height: 44px;
  cursor: pointer;

  &[disabled] {
    pointer-events: none;
    background-color: #cccccc;
    opacity: 0.5;
  }
`;
