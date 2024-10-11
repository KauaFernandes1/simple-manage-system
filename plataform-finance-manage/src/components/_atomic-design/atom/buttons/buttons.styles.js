// src/_atomic-design/atoms/Button.js
import styled from 'styled-components';
import { colors } from './Colors';

const StyledButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: ${(props) => (props.variant === 'light' ? colors.textDark : colors.textLight)};
    background-color: ${(props) => {
        switch (props.variant) {
            case 'primary':
                return colors.primary;
            case 'secondary':
                return colors.secondary;
            case 'success':
                return colors.success;
            case 'danger':
                return colors.danger;
            case 'warning':
                return colors.warning;
            default:
                return colors.light;
        }
    }};

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        background-color: ${colors.light};
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

export const Button = ({ variant, children, ...props }) => {
    return (
        <StyledButton variant={variant} {...props}>
            {children}
        </StyledButton>
    );
};
