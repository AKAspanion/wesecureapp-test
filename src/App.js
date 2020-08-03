import React from "react";

import { MainView } from "./views/";
import { Registration } from "./pages/";

function App() {
  return (
    <div className="App">
      <MainView
        title="Register"
        linkText="Log in"
        page={<Registration />}
        subtitle="Already have an account?"
      />
    </div>
  );
}

export default App;
