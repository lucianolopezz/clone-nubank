import React, { useRef } from 'react';

import Step from '../../../components/Step';

import { Input } from './styles';

function Name({ navigation }) {
  const inputRef = useRef(null);

  navigation.addListener('focus', () => inputRef.current.focus());

  return (
    <Step
      title="Qual seu nome completo?"
      buttonTitle="continuar"
      onPress={() => navigation.navigate('Email')}

    >
      <Input
        autoFocus
        returnKeyType="none"
        ref={inputRef}
      />
    </Step>
  );
}

export default Name;