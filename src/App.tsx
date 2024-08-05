import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BotMenuButtonPage } from "./pages/BotMenuButtonPage";
import { InlineButtonPage } from "./pages/InlineButtonPage";
import { KeyboardButtonPage } from "./pages/KeyboardButtonPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BotMenuButtonPage />,
  },
  {
    path: "inline",
    element: <InlineButtonPage />,
  },
  {
    path: "keyboard",
    element: <KeyboardButtonPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
