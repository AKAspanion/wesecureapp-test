import React, { useState } from "react";

import { MainView } from "./views/";
import { Login, Registration } from "./pages/";

function App() {
  const [notification, setNotification] = useState(null);
  const [activePage, setActivePage] = useState("Register");

  const pages = [
    {
      title: "Register",
      linkKey: "Log in",
      linkText: "Log in",
      page: <Registration onNotify={setNotification} />,
      subtitle: "Already have an account?",
    },
    {
      title: "Log in",
      linkKey: "Register",
      linkText: "Register now",
      page: <Login onNotify={setNotification} />,
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
      <MainView
        {...currentMainView()}
        notification={notification}
        onLinkClick={handleLinkClick}
        onNotifyClose={() => setNotification(null)}
      />
    </div>
  );
}

export default App;
