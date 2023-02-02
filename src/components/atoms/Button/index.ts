import styled, { css, DefaultTheme } from 'styled-components';
import { rgb } from 'color';

type Variant = keyof DefaultTheme['color'];
const defaultVariant: Variant = 'primary';

interface ButtonProps {
  outline?: boolean;
  variant?: Variant;
}
export const Button = styled.button<ButtonProps>`
  padding: 12px;
  border-radius: 8px;
  border: 2px solid
    ${({ theme, variant: variantProps }) => {
      const variant = variantProps || defaultVariant;

      return theme.color[variant];
    }};

  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.fast};

  font-weight: 600;

  ${({ outline, variant: variantProps }) => {
    const variant = variantProps || defaultVariant;

    return outline
      ? css`
          background-color: transparent;

          color: ${({ theme }) => theme.color[variant]};

          &:not(:disabled) {
            &:hover {
              background-color: ${({ theme }) => theme.color[variant]};
            }

            &:hover,
            &:focus {
              color: inherit;
            }
          }
        `
      : css`
          background-color: ${({ theme }) => theme.color[variant]};

          &:not(:disabled) {
            &:hover {
              background-color: ${({ theme }) =>
                rgb(theme.color[variant]).darken(0.1).hexa()};
            }
          }
        `;
  }}

  &:not(:disabled) {
    &:focus {
      background-color: ${({ theme, variant: variantProps }) => {
        const variant = variantProps || defaultVariant;

        return rgb(theme.color[variant]).darken(0.2).hexa();
      }};

      box-shadow: 0 0 0 2px
        ${({ theme, variant: variantProps }) => {
          const variant = variantProps || defaultVariant;

          return rgb(theme.color[variant]).alpha(0.5).hexa();
        }};
    }
  }

  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }
`;
