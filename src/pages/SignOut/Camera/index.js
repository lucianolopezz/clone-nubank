import React, { useState, useEffect } from 'react';

import { View, Alert } from 'react-native';

import {
  Container,
  Content,
  Retangle,
  Warning,
  RNcamera,
  Title,
  Footer,
  ButtonBack,
  IconBack,
  ButtonCapture,
} from './styles';

function Camera({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(RNcamera.Constants.Type.back);


  function handleCaptureCamera() {
    Alert.alert(
      "Tudo certo",
      "Foto capturada",
      [
        {
          text: "Cancelar",
          onPress: () => navigation.goBack(),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate('Success') }
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    (async () => {
      const { status } = await RNcamera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  if (hasPermission === null) {
    return null;
  }

  if (hasPermission === false) {
    return <Warning>No access to camera</Warning>;
  }

  return (
    <Container>
      <RNcamera
        type={type}
      >
        <Content>
          <Title>
            Tente enquadrar a frente do documento no retângulo abaixo.
          </Title>
          <Retangle />
          <Footer>
            <ButtonBack
              onPress={() => navigation.goBack()}
            >
              <IconBack name="ios-arrow-back" size={30} color="#fff" />
            </ButtonBack>
            <ButtonCapture
              onPress={handleCaptureCamera}
            />
            <View />
          </Footer>
        </Content>
      </RNcamera>
    </Container>
  );
}

export default Camera;