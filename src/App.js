import "./App.css";
import { Card } from "./Card";

function App() {
  const box_type = ["Free", "Plus", "Pro"];
  return (
    <div className="App">
      <div className="full_container">
        {box_type.map((el) => {
          return <Card box_type_text={el} />;
        })}
      </div>
    </div>
  );
}

export default App;
