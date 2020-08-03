import React, { useState } from "react";

import { MainView } from "./views/";
import { Login, Registration } from "./pages/";

function App() {
  const [notification, setNotification] = useState(null);
  const [activePage, setActivePage] = useState("Log in");

  const pages = [
    {
      title: "Register",
      linkKey: "Log in",
      linkText: "Log in",
      page: <Registration onNotify={setNotification} />,
      subtitle: "Already have an account?",
    },
    {
      title: "Trouble logging in?",
      page: (
        <Login
          forgot
          onNotify={setNotification}
          changeView={(v) => setActivePage(v)}
        />
      ),
      subtitle: "Reset your account password.",
    },
    {
      title: "Log in",
      linkKey: "Register",
      linkText: "Register now",
      page: (
        <Login
          onNotify={setNotification}
          changeView={(v) => setActivePage(v)}
        />
      ),
      subtitle: "Don’t have an account?",
    },
  ];

  function handleLinkClick(e, title) {
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
