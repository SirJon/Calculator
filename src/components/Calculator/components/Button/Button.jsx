import { useContext } from 'react';
import { NumberContext } from '../../Provider/NumberProvider';

const Button = ({ children, type = "small", variant = "blue", value }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button
      style={{
        cursor: "pointer",
        border: "none",
        outline: "none",
        color: "#ffffff",
        borderRadius: `${type === "big" ? "40px" : "50%"}`,
        width: `${type === "small" ? "50px" : "105px"}`,
        gridColumn: `${type === "big" ? "1/3" : ""}`,
        height: "50px",
        background: `${variant === "blue"
          ? "#195bd2"
          : variant === "yelow"
            ? "#d26919"
            : "#717f99"
          }`
      }}
      onClick={() => handleSetDisplayValue(value)}
    >
      {value}
    </button>
  )
}

export default Button
