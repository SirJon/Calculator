import Box from '@mui/material/Box';
import Button from "../Button/Button"

const NumberButton = () => {
  return (
    <Box style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "5px",
      gridRow: "2/3",
      gridColumn: "1/2",
    }}>
      <Button value="7"/>
      <Button value="8"/>
      <Button value="9"/>
      <Button value="4"/>
      <Button value="5"/>
      <Button value="6"/>
      <Button value="1"/>
      <Button value="2"/>
      <Button value="3"/>
      <Button type="big" value="0"/>
      <Button value="."/>
    </Box>
  )
}

export default NumberButton
