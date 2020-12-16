import React from 'react';

import { KeyboardAvoidingView } from 'react-native';

import {
  Container,
  Content,
  Title,
  Description,
  Button,
  ButtonTitle,
} from './styles';

const Cpf = ({ title, description, buttonTitle, onPress, children }) => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={'padding'}
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <Content>
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
          {children}
        </Content>

        <Button onPress={onPress}>
          <ButtonTitle>{buttonTitle}</ButtonTitle>
        </Button>
      </KeyboardAvoidingView>
    </Container>
  );
}

export default Cpf;