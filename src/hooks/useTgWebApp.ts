const useTgWebApp = () => {
  const webApp = window.Telegram.WebApp;
  const user = window.Telegram.WebApp.initDataUnsafe.user;

  const addMainButton = (text: string, callback: () => void) => {
    webApp.MainButton.onClick(callback);
    webApp.MainButton.setText(text);
    webApp.MainButton.show();
  };

  const addBackButton = (callback: () => void) => {
    webApp.BackButton.onClick(callback);
    webApp.MainButton.show();
  };

  return {
    webApp,
    user,
    onClose: () => webApp.close(),
    addMainButton,
    addBackButton,
  };
};

export default useTgWebApp;
