import Button from "../Button/Button"

const FunctionButton = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      gridRow: "1/3",
      gridColumn: "2/3",
    }}>
      <Button variant="yelow" value="÷" />
      <Button variant="yelow" value="×" />
      <Button variant="yelow" value="-" />
      <Button variant="yelow" value="+" />
      <Button variant="yelow" value="=" />
    </div>
  )
}

export default FunctionButton
