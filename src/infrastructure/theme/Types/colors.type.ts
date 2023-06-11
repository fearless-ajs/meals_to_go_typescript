export type TBrand = {
    primary: string,
    secondary: string,
    muted: string,
}

export type TUi = {
    primary: string,
    secondary: string,

    tertiary: string,
    quaternary: string,
    disabled: string,
    error: string,
    success: string,
}

export type TBg = {
    primary: string,
    secondary: string,
}

export type TText = {
    primary: string,
    secondary: string,
    disabled: string,
    inverse: string,
    error: string,
    success: string,
}

export type TColors = {
    brand: TBrand,
    ui: TUi,
    bg: TBg,
    text: TText,
}
