import { FC, ButtonHTMLAttributes } from "react";
import "./button.scss";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>; // specific binding for the button components from react

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType as keyof typeof BUTTON_TYPE_CLASSES]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  buttonType: BUTTON_TYPE_CLASSES.base,
};

export default Button;
