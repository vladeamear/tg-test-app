import { useLayoutEffect, useState } from "react";
import "./App.css";

declare global {
  interface Window {
    Telegram: Telegram;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount((prev) => prev + 1);

  const closeWebApp = () => window.Telegram.WebApp.close();

  useLayoutEffect(() => {
    window.Telegram.WebApp.MainButton.onClick(inc);
    window.Telegram.WebApp.MainButton.setText("+1");
    window.Telegram.WebApp.MainButton.show();

    window.Telegram.WebApp.BackButton.onClick(closeWebApp);
    window.Telegram.WebApp.BackButton.show();
  });

  return (
    <>
      <h1>Hello World</h1>
      <h3>{count}</h3>
      <button onClick={inc}>+1</button>
      <button onClick={closeWebApp} className="outline">
        close
      </button>
    </>
  );
}

export default App;
