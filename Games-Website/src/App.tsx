import "./App.css";
import Like from "./Components/Like";

function App() {
  return (
    <>
      <div>Test</div>
      <Like onclick={() => console.log("Clicked!")} />
    </>
  );
}

export default App;
