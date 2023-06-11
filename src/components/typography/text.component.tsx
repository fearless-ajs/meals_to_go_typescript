import styled from "styled-components/native";
import {ITheme} from "../../infrastructure/theme/interface/theme.interface";

const defaultTextStyles = (theme: ITheme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: ITheme) => `
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme: ITheme) => `
  font-size: ${theme.fontSizes.body};
`;

const error = (theme: ITheme) => `
  color: ${theme.colors.text.error};
`;

const caption = (theme: ITheme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: ITheme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
`;

const variants = {
    body,
    label,
    caption,
    error,
    hint,
};

export const Text = styled.Text<{ variant: keyof typeof variants }>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
    variant: "body",
};