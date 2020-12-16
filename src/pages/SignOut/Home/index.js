import React from 'react';

import {
  Container,
  Logo,
  BackgroundImage,
  ContainerBgmImage,
  Description,
  Button,
  ButtonTitle,
} from './styles';

import logo_img from '../../../../assets/logo.png';
import bg_image from '../../../../assets/bg_home.jpg';

function Home ({ navigation }) {
  return (
    <Container>
      <Logo source={logo_img} resizeMode="contain" />
      <BackgroundImage
        source={bg_image}
        resizeMode="cover"
      >
        <ContainerBgmImage>
          <Description>
            Um mundo{'\n'}financeiro sem{'\n'}complexidades
          </Description>
          <Button onPress={() => navigation.navigate('Cpf')}>
            <ButtonTitle>Começar</ButtonTitle>
          </Button>
        </ContainerBgmImage>
      </BackgroundImage>
    </Container>
  );
}

export default Home;