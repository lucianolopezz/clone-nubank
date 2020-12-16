import React, { useRef } from 'react';

import Step from '../../../components/Step';

import { Input } from './styles';

function Cpf({ navigation }) {
  const inputRef = useRef(null);

  navigation.addListener('focus', () => inputRef.current.focus());

  return (
    <Step
      title="Qual seu CPF?"
      description="Ele é usado como sua principal identificação no Nubank."
      buttonTitle="continuar"
      onPress={() => navigation.navigate('Name')}
    >
      <Input
        autoFocus
        returnKeyType="none"
        keyboardType="number-pad"
        ref={inputRef}
      />
    </Step>
  );
}

export default Cpf;