import NumberProvider from './Provider/NumberProvider';

import Box from '@mui/material/Box';
import Display from './components/Display/Display';
import NumberButton from './components/NumberButton/NumberButton';
import FunctionButton from './components/FunctionButton/FunctionButton';
import AuxiliaryButton from './components/AuxiliaryButton/AuxiliaryButton';

const Calculator = () => {
  return (
    <NumberProvider>
      <Box style={{
        background: "#201d1d",
        display: "inline-flex",
        flexDirection: "column",
        gap: "5px",
        padding: "10px",
        borderRadius: "5px"
      }}>
        <Display />
        <Box style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "5px"
        }}>

          <AuxiliaryButton />
          <NumberButton />
          <FunctionButton />
        </Box>
      </Box>
    </NumberProvider>
  )
}

export default Calculator
