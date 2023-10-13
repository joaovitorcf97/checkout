import styled from "styled-components";

export const Container = styled.div`
  width: 1320px;
  margin: auto;
`;

export const Header = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ContactButton = styled.a`
  border: none;
  background: #ffda00;
  border-radius: 2rem;
  font-size: 24px;
  padding: 4px 32px;
  font-weight: 700;
  cursor: pointer;
  color: #3c3c3b;
`;

export const ContainerForms = styled.div`
  display: flex;
`;

export const Form = styled.div`
  width: 33%;
  margin: 0 36px;
  padding: 0 1rem;
`;

export const Line = styled.div`
  width: 1px;
  background: #e0e0e0;
`;

export const TitleForm = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #3c3c3b;
`;

export const DescriptionForm = styled.p`
  color: #7f8690;
  margin: 28px 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const InputContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 46%;
`;

export const InputContainerLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LabelText = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
  padding-left: 12px;
`;

export const Input = styled.input`
  border-radius: 10px;
  font-size: 12px;
  line-height: 24px;
  min-height: 51px;
  border: 1px solid transparent;
  background: #fcf8ef;
  padding: 0 16px;

  &:focus {
    outline: 1px solid #ffda00;
  }
`;

export const InputError = styled.p`
  color: #f00000;
  font-size: 12px;
  line-height: 12px;
  margin-top: 10px;
  text-align: right;
`;

export const SendButton = styled.button`
  border: none;
  background: #ffda00;
  border-radius: 2rem;
  font-size: 24px;
  padding: 8px 0;
  width: 100%;
  font-weight: 700;
  cursor: pointer;
  color: #3c3c3b;
`;

export const Summary = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 2px solid #f2f2f2;
  border-bottom: 2px solid #f2f2f2;
`;

export const SummaryTitle = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 18px 0;
`;

export const SummaryTextLeft = styled.p`
  font-size: 16px;
  color: #7f8690;
  font-weight: 600;
`;

export const SummaryTextRight = styled.p`
  font-size: 16px;
  color: #7f8690;
`;
