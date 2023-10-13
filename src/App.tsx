import {
  ContactButton,
  Container,
  ContainerForms,
  DescriptionForm,
  Form,
  Header,
  Input,
  InputContainer,
  InputContainerLine,
  InputContainerTwo,
  InputError,
  LabelText,
  Line,
  SendButton,
  Summary,
  SummaryRow,
  SummaryTextLeft,
  SummaryTextRight,
  SummaryTitle,
  TitleForm,
} from "./components/CheckoutStyles";
import LogoSVG from "./components/Logo";

function App() {
  return (
    <Container>
      <Header>
        <LogoSVG width={180} />
        <ContactButton>31 3333 4444</ContactButton>
      </Header>
      <ContainerForms>
        <Form>
          <TitleForm>Cadastro</TitleForm>
          <DescriptionForm>
            Preencha os campos abaixo com seus dados pessoais.
          </DescriptionForm>
          <InputContainer>
            <LabelText>Nome</LabelText>
            <Input name="name" placeholder="Ex. Ana Maria Ferreira" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>
          <InputContainer>
            <LabelText>CPF</LabelText>
            <Input name="documento" placeholder="000.000.000-00" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>
          <InputContainer>
            <LabelText>E-mail</LabelText>
            <Input name="email" placeholder="ana@email.com" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>
          <InputContainer>
            <LabelText>Senha</LabelText>
            <Input name="password" type="password" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>
          <InputContainer>
            <LabelText>Confirmar senha</LabelText>
            <Input name="passwordConfirm" type="password" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>
          <InputContainer>
            <LabelText>Telefone</LabelText>
            <Input name="phone" placeholder="(31) 9 0000-0000" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>
          <InputContainer>
            <LabelText>Telefone</LabelText>
            <Input name="date" type="date" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>
        </Form>
        <Line></Line>
        <Form>
          <TitleForm>Endereço</TitleForm>
          <DescriptionForm>
            Preencha os campos abaixo com o seu endereço.
          </DescriptionForm>
          <InputContainer>
            <LabelText>CEP</LabelText>
            <Input name="cep" placeholder="0000-000" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>
          <InputContainerLine>
            <InputContainerTwo>
              <LabelText>Cidade</LabelText>
              <Input name="city" placeholder="Timóteo" />
              <InputError>Campo obrigatorio</InputError>
            </InputContainerTwo>

            <InputContainerTwo>
              <LabelText>Estado</LabelText>
              <Input name="state" placeholder="MG" />
              <InputError>Campo obrigatorio</InputError>
            </InputContainerTwo>
          </InputContainerLine>
          <InputContainer>
            <LabelText>Rua</LabelText>
            <Input name="documento" placeholder="Nova almeida" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>
          <InputContainer>
            <LabelText>Bairro</LabelText>
            <Input name="bairro" placeholder="Ana Rita" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>
          <InputContainerLine>
            <InputContainerTwo>
              <LabelText>Numero</LabelText>
              <Input name="number" placeholder="00" />
              <InputError>Campo obrigatorio</InputError>
            </InputContainerTwo>

            <InputContainerTwo>
              <LabelText>Complemento</LabelText>
              <Input name="number" placeholder="Apt 1" />
              <InputError>Campo obrigatorio</InputError>
            </InputContainerTwo>
          </InputContainerLine>
        </Form>
        <Line></Line>
        <Form>
          <TitleForm>Pagamento</TitleForm>
          <DescriptionForm></DescriptionForm>

          <InputContainer>
            <LabelText>Número do cartão</LabelText>
            <Input name="cep" placeholder="0000 0000 0000 0000 0000" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>

          <InputContainer>
            <LabelText>Nome do titular (o mesmo do cartão)</LabelText>
            <Input name="cep" placeholder="Ex. Ana Maria Ferreira" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>

          <InputContainer>
            <LabelText>CPF do titular</LabelText>
            <Input name="cep" placeholder="000.000.0000-00" />
            <InputError>Campo obrigatorio</InputError>
          </InputContainer>

          <InputContainerLine>
            <InputContainerTwo>
              <LabelText>Validade</LabelText>
              <Input name="valid" placeholder="00/00" />
              <InputError>Campo obrigatorio</InputError>
            </InputContainerTwo>

            <InputContainerTwo>
              <LabelText>CCV</LabelText>
              <Input name="ccv" placeholder="123" />
              <InputError>Campo obrigatorio</InputError>
            </InputContainerTwo>
          </InputContainerLine>

          <Summary>
            <SummaryTitle>Resumo</SummaryTitle>
            <SummaryRow>
              <SummaryTextLeft>Adesão</SummaryTextLeft>
              <SummaryTextRight>R$ 30,00</SummaryTextRight>
            </SummaryRow>
            <SummaryRow>
              <SummaryTextLeft>Mensalmente</SummaryTextLeft>
              <SummaryTextRight>R$ 39,99</SummaryTextRight>
            </SummaryRow>
            <SummaryRow>
              <SummaryTextLeft>1 pagamento de</SummaryTextLeft>
              <SummaryTextRight>R$ 69,99</SummaryTextRight>
            </SummaryRow>
          </Summary>

          <SendButton>Contratar</SendButton>
        </Form>
      </ContainerForms>
    </Container>
  );
}

export default App;
