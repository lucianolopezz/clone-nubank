import styled, { css } from 'styled-components/native';
import { StyleSheet, Platform } from 'react-native';
import { general } from '../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: #fff;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #333;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #ccc;
  margin-top: 10px;
`;

const ButtonStyled = Platform.select({
  ios: css`
    position: relative;
    bottom: 60px;
  `,
  android: css`
    position: absolute;
    bottom: 0;
  `,
})

export const Button = styled.TouchableOpacity`
  ${general.button};
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: #ccc;
  ${ButtonStyled};
`;

export const ButtonTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #612F74;
  text-transform: uppercase
`;
