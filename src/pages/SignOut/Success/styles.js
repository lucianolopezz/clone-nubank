import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { general } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  padding: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #333;
  font-weight: 500;
`;

export const Description = styled.Text`
  text-align: justify;
  margin-top: 5px;
  color: #808080;
`;

export const Button = styled.TouchableOpacity`
  ${general.button};
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: #ccc;
  position: absolute;
  bottom: 0;
`;

export const ButtonTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #612F74;
  text-transform: uppercase;
`;
