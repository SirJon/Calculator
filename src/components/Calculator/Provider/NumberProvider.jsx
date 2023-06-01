import { createContext, useState } from 'react';

export const NumberContext = createContext();

const math = (a, b, sign) => {
  const result = {
    '+': (a, b) => (Math.round((a + b) * 100) / 100),
    '-': (a, b) => (Math.round((a - b) * 1000) / 1000),
    '×': (a, b) => (Math.round((a * b) * 1000) / 1000),
    '÷': (a, b) => (Math.round((a / b) * 1000) / 1000),
  }
  return result[sign](a, b);
}

const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState('0');
  const [storedNumber, setStoredNumber] = useState('0');
  const [action, setAction] = useState('');
  const [isAction, setIsAction] = useState(false);

  const handleSetDisplayValue = (num) => {
    switch (num) {
      case '+':
        setStoredNumber(number);
        setNumber('0');
        setAction(num);
        break;
      case '×':
        setStoredNumber(number);
        setNumber('0');
        setAction(num);
        break;
      case '-':
        setStoredNumber(number);
        setNumber('0');
        setAction(num);
        break;
      case '÷':
        setStoredNumber(number);
        setNumber('0');
        setAction(num);
        break;
      case '=':
        setNumber(math(Number(storedNumber), Number(number), action));
        setStoredNumber('0');
        setAction('');
        setIsAction(true);
        break;
      case '±':
        setNumber((number * -1).toString());
        break;
      case '%':
        setNumber((number / 100).toString());
        break;
      case 'C':
        setNumber('0');
        setStoredNumber('0');
        setAction('');
        break;

      default:
        if (isAction) {
          setNumber(`${(num).replace(/^0+/, '')}`);
          setIsAction(false);
        } else {
          setNumber(`${(number + num).replace(/^0+/, '')}`);
        }
        break;
    }
  };
  return (
    <NumberContext.Provider
      value={{
        handleSetDisplayValue,
        number,
      }}>
      {children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;