import Button from "./Button";
import Count from "./Count";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Count />
      <Button />
    </div>
  );
}

export default App;
