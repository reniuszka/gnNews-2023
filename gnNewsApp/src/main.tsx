import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Country } from "./components/Country";
import "./index.css";
import RootLayout from "./routes/RootLayout";
import { ArticlesContextProvider } from "./context/ArticlesContext";
import { store } from "./store";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "country",
        children: [
          {
            path: ":country",
            element: <Country />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ArticlesContextProvider>
      <Provider store={store}>
        {/* <App /> */}
        <RouterProvider router={router} />
      </Provider>
    </ArticlesContextProvider>
  </React.StrictMode>
);
