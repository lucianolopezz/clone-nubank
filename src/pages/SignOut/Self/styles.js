import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { general } from '../../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  font-size: 25px;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #ccc;
  margin-top: 10px;
`;

export const Bold = styled.Text`
  font-weight: bold;
  color: #333;
`;

export const Icon = styled(FontAwesome)`
  align-self: center;
`;

export const Button = styled.TouchableOpacity`
  ${general.button};
  border-radius: 8px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #ccc;
`;

export const ButtonTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #612F74;
  text-transform: uppercase
`;
