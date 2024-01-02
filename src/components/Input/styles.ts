import { styled } from "styled-components/native"

type InputProps = {
    width: number
    height: number
}

export const InputContainer = styled.TextInput<InputProps>`
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border: 1px solid ${({ theme }) => theme.COLORS.gray_500};
    border-radius: 8px;
    margin-top: 10px;
    padding: 0 10px;
`