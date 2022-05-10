import { InputHTMLAttributes, FC } from "react";
import "./form-input.scss";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  let shrink = otherProps?.value;
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label className={`${typeof shrink === "string" && shrink.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
