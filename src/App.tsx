import { useLayoutEffect, useState } from "react";

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
    tg.MainButton.onClick(() => {
      tg.sendData(JSON.stringify({ count }));
    });
    tg.MainButton.setText("Отправить число в бот");
    tg.MainButton.show();

    tg.BackButton.onClick(closeWebApp);
    tg.BackButton.show();
  });

  return (
    <>
      {tgUser ? (
        <>
          <h1>
            Hello, {tgUser.first_name} {tgUser.last_name}
          </h1>
          <img src={tgUser.photo_url} className="avatar" />
          <table className="faded">
            <tr>
              <td className="bold">id</td>
              <td>{tgUser.id}</td>
            </tr>
            <tr>
              <td className="bold">username</td>
              <td>{tgUser.username}</td>
            </tr>
            <tr>
              <td className="bold">is_bot</td>
              <td>{tgUser.is_bot}</td>
            </tr>
            <tr>
              <td className="bold">is_premium</td>
              <td>{tgUser.is_premium}</td>
            </tr>
          </table>
        </>
      ) : (
        <h1>Hello World</h1>
      )}
      <h3>{count}</h3>
      <button onClick={inc}>+1</button>
      <button onClick={closeWebApp} className="outline">
        close
      </button>
    </>
  );
}

export default App;
