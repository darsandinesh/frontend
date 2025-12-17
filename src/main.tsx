import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store.tsx";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

declare global {
  interface Window {
    _env_: Record<string, unknown>;
  }
}

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </PersistGate>
  </Provider>,
);
