import React from 'react';

import {
  Container,
  Header,
  Title,
  Description,
  Bold,
  Icon,
  Button,
  ButtonTitle,
} from './styles';

function Self({ navigation }) {
  return (
    <Container>
      <Header>
        <Title>
          Fulano de tal, agora precisamos de <Bold>fotos do seu documento</Bold> para verificar sua identidade
        </Title>
        <Description>
          vamos começar com a <Bold>Frente</Bold> do seu documento com foto. Aceitamos apenas <Bold>RG</Bold>, <Bold>CNH</Bold> e <Bold>RNE</Bold>.
        </Description>
      </Header>
      <Icon name="vcard" size={100} color="#612F74" />
      <Button onPress={() => navigation.navigate('Camera')}>
        <ButtonTitle>Vamos lá</ButtonTitle>
      </Button>
    </Container>
  );
}

export default Self;