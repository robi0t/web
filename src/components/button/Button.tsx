import styled from "styled-components";

type ButtonVariant = "ACCENT" | "PRIMARY";

export const Button = styled.button<{variant: ButtonVariant}>`
    background: ${({ theme, variant }) => variant == "ACCENT" ? theme.palette.accent.default : theme.palette.primary[700]};
    border: none;
    outline: none;
    padding: 10px 40px;
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
    transition: ${({ theme }) => theme.animation.micro};
    color: ${({ theme }) => theme.palette.buttonText};
    font-weight: 700;
    font-size: 1.225rem;
    line-height: 1.8rem;
    display: flex;  
    justify-content: center;
    align-items: center;
    height: fit-content;
    &:hover {
        background: ${({ theme, variant }) => variant == "ACCENT" ? theme.palette.accent.hover : theme.palette.primary[600]};
    }
`;