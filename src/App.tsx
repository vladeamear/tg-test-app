import { useLayoutEffect, useState } from "react";
import "./App.css";

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

function App() {
  const tg = window.Telegram.WebApp;
  const tgUser = window.Telegram.WebApp.initDataUnsafe.user;

  const [count, setCount] = useState(0);
  const inc = () => setCount((prev) => prev + 1);

  const closeWebApp = () => tg.close();

  useLayoutEffect(() => {
    tg.MainButton.onClick(inc);
    tg.MainButton.setText("+1");
    tg.MainButton.show();

    tg.BackButton.onClick(closeWebApp);
    tg.BackButton.show();
  });

  return (
    <>
      {tgUser ? (
        <h1>
          Hello, {tgUser.first_name} {tgUser.last_name}{" "}
          <span className="faded">({tgUser.id})</span>
        </h1>
      ) : (
        <h1>Hello World</h1>
      )}
      <h2></h2>
      <h3>{count}</h3>
      <button onClick={inc}>+1</button>
      <button onClick={closeWebApp} className="outline">
        close
      </button>
    </>
  );
}

export default App;
