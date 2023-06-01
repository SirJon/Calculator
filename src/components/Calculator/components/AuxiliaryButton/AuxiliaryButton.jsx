import Button from "../Button/Button"

const AuxiliaryButton = () => {
  return (
    <div style={{
      display: "flex",
      gap: "5px",
      gridRow: "1/2",
      gridColumn: "1/2",
    }}>
      <Button variant="grey" value="C" />
      <Button variant="grey" value="±" />
      <Button variant="grey" value="%" />
    </div>
  )
}

export default AuxiliaryButton
