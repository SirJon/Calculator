import { useContext } from 'react';
import { NumberContext } from '../../Provider/NumberProvider';

const Display = () => {
  const { number } = useContext(NumberContext);
  return (
    <div style={{
      height: "100px",
      width: "213px",
      color: "white",
      textAlign: "right",
    }}>
      {number}
    </div>
  )
}

export default Display
