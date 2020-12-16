import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
} from './styles';

function HeaderLeft({ iconName = 'arrow-back' }) {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.goBack()}>
      <MaterialIcons name={iconName} size={35} color="#ccc" />
    </Container>
  );
}

export default HeaderLeft;