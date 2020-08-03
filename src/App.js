import React, { useState } from "react";

import { MainView } from "./views/";
import { Login, Registration } from "./pages/";

function App() {
  const [activePage, setActivePage] = useState("Register");

  const pages = [
    {
      title: "Register",
      linkKey: "Log in",
      linkText: "Log in",
      page: <Registration />,
      subtitle: "Already have an account?",
    },
    {
      title: "Log in",
      linkKey: "Register",
      linkText: "Register now",
      page: <Login />,
      subtitle: "Don’t have an account?",
    },
  ];

  function handleLinkClick(e, title) {
    console.log(e, title);
    setActivePage(title);
  }

  function currentMainView() {
    return pages.find((p) => p.title === activePage);
  }

  return (
    <div className="App">
      <MainView {...currentMainView()} onLinkClick={handleLinkClick} />
    </div>
  );
}

export default App;
