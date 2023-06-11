import styled from "styled-components/native";
import {Card} from "react-native-paper";
import {DefaultTheme, ThemedStyledProps} from "styled-components";
import {TextProps} from "react-native";
import React from "react";
import {Text} from "../../../components/typography/text.component";
import {SvgXml} from "react-native-svg";

export const RestaurantCard = styled(Card)`
  background-color: ${(props: ThemedStyledProps<TextProps & React.RefAttributes<Text>, DefaultTheme>) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props: ThemedStyledProps<TextProps & React.RefAttributes<Text>, DefaultTheme>) => props.theme.space[3]};
  background-color: white;
`;

export const Address = styled.Text`
  font-family: ${(props:  ThemedStyledProps<TextProps & React.RefAttributes<Text>, DefaultTheme>) => props.theme.fonts.body};
  font-size: ${(props:  ThemedStyledProps<TextProps & React.RefAttributes<Text>, DefaultTheme>) => props.theme.fontSizes.caption};
`;


export const Info = styled.View`
  padding: ${(props:  ThemedStyledProps<TextProps & React.RefAttributes<Text>, DefaultTheme>) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props:  ThemedStyledProps<TextProps & React.RefAttributes<Text>, DefaultTheme>) => props.theme.space[2]};
  padding-bottom: ${(props:  ThemedStyledProps<TextProps & React.RefAttributes<Text>, DefaultTheme>) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Open = styled(SvgXml)`
  flex-direction: row;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;