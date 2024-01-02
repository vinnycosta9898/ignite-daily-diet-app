import { styled } from "styled-components/native";

type TitleTextColorProps = 'green' | 'red' | 'black'

type RegularTextColorProps = 'black' | 'white'

type TitleTextProps = {
    color: TitleTextColorProps
    size?: 'md' | 'lg'
}

type RegularTextProps = {
    color: RegularTextColorProps
    isBold: boolean
}

export const TitleText = styled.Text<TitleTextProps>`
    color: ${({ theme, color }) => color === 'green' ? theme.COLORS.green_700 : color === 'red' ? theme.COLORS.red_700 : theme.COLORS.gray_100};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme, size }) => size === 'md' ? theme.FONT_SIZE.md : size === 'lg' ? theme.FONT_SIZE.lg : theme.FONT_SIZE.xl}px;
    text-align: center;
`

export const RegularText = styled.Text<RegularTextProps>`
    color: ${({ theme, color }) => color === 'black' ? theme.COLORS.gray_100 : theme.COLORS.white};
    font-family: ${({ theme, isBold}) => isBold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
    text-align: center;
`