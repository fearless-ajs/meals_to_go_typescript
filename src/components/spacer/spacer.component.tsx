import React, { ReactNode } from "react";
import styled, { useTheme } from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

type SizeVariant = "small" | "medium" | "large";
type PositionVariant = "top" | "left" | "right" | "bottom";

const sizeVariant: Record<SizeVariant, number> = {
    small: 1,
    medium: 2,
    large: 3,
};

const positionVariant: Record<PositionVariant, string> = {
    top: "marginTop",
    left: "marginLeft",
    right: "marginRight",
    bottom: "marginBottom",
};

const getVariant = (position: PositionVariant, size: SizeVariant, theme: DefaultTheme) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex];

    return `${property}:${value}`;
};

const SpacerView = styled.View<{ variant: string }>`
  ${({ variant }) => variant};
`;

interface SpacerProps {
    position?: PositionVariant;
    size?: SizeVariant;
    children?: ReactNode;
}

export const Spacer: React.FC<SpacerProps> = ({ position = "top", size = "small", children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
    position: "top",
    size: "small",
};
