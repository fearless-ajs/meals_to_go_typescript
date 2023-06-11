import {TColors} from "../Types/colors.type";
import {TLineHeights, TSpace} from "../Types/spacing.type";
import {TSizes} from "../Types/sizes.type";
import {TFonts, TFontSizes, TFontWeights} from "../Types/fonts.type";

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme {}
}

export interface ITheme  {
    colors: TColors,
    space: TSpace,
    lineHeights: TLineHeights,
    sizes: TSizes,
    fonts: TFonts,
    fontSizes: TFontSizes,
    fontWeights: TFontWeights,
};