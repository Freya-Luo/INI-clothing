import "./button.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, loading = false, ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} disabled={loading} {...otherProps}>
      {loading ? <div className="button-loading"></div> : children}
    </button>
  );
};

export default Button;
