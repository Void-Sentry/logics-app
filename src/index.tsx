import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "store";
import { clientAuthCredentials } from "store/actions";
import { BASE_URL, Endpoint, HEADERS, Method, URL_ENCODED } from "constants/api";

const root = ReactDOM.createRoot(document.getElementById("root"));

store.dispatch(clientAuthCredentials({
  url: `${BASE_URL}${Endpoint.AUTH_CLIENT}`,
  options: {
    method: Method.POST,
    headers: HEADERS,
    body: URL_ENCODED,
  }
}));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

document.body.classList.add("dark");