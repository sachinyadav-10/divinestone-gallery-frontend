import { useEffect, useState } from "react";
import api from "./src/services/api.js";

function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    api.get("/health/").then((res) => {
      setHealth(res.data);
    });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>DivineStone Gallery</h1>
      <pre>{JSON.stringify(health, null, 2)}</pre>
    </div>
  );
}

export default App;