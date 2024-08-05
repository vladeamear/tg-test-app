import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BotMenuButtonPage } from "./pages/BotMenuButtonPage";
import { InlineButtonPage } from "./pages/InlineButtonPage";
import { KeyboardButtonPage } from "./pages/KeyboardButtonPage";

const router = createBrowserRouter([
  {
    path: "/tg-test-app",
    element: <BotMenuButtonPage />,
  },
  {
    path: "/tg-test-app/inline",
    element: <InlineButtonPage />,
  },
  {
    path: "/tg-test-app/keyboard",
    element: <KeyboardButtonPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
