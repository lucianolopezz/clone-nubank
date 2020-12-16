import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Content,
  Title,
  Description,
  Button,
  ButtonTitle,
} from './styles';

function Success({ navigation }) {
  return (
    <Container>
      <Content>
        <Ionicons name="ios-checkmark-circle-outline" size={100} color="#612F74" />
        <Title>Informações enviadas</Title>
        <Description>
          Seu pedido será analisado e, se estiver tudo certo, um código de convite será enviado para teste@teste.com.br
        </Description>
      </Content>
      <Button onPress={() => navigation.navigate('Home')}>
        <ButtonTitle>Finalizar</ButtonTitle>
      </Button>
    </Container>
  );
}

export default Success;