import React, { useRef } from 'react';

import Step from '../../../components/Step';

import { Input } from './styles';

function Email({ navigation }) {
  const inputRef = useRef(null);

  navigation.addListener('focus', () => inputRef.current.focus());

  return (
    <Step
      title="Qual seu e-mail pessoal?"
      description="Ele será usado como a principal forma de comunicação do Nubank com você."
      buttonTitle="continuar"
      onPress={() => navigation.navigate('Self')}
    >
      <Input
        autoFocus
        returnKeyType="none"
        ref={inputRef}
      />
    </Step>
  );
}

export default Email;