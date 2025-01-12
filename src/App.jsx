import { useState } from "react";

import "./App.css";
import NotToDoList from "./NotToDoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NotToDoList />
    </>
  );
}

export default App;
