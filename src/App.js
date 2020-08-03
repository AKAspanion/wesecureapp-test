import React from "react";

import { MainView } from "./views/";
import { Registration } from "./pages/";

function App() {
  return (
    <div className="App">
      <MainView page={<Registration />} />
    </div>
  );
}

export default App;
