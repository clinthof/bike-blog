const Button: React.FC = ({ children, ...restProps }) => {
  return (
    <button {...restProps}>{children}</button>
  );
};

export default Button;