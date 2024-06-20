import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
import { Cart } from "../features/cart/Cart.jsx";
import { Total } from "../features/total/total.jsx";
import { Voucher } from "../features/voucher/Vocher.jsx";
import { Owner } from "../features/owner/Owner.jsx";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Owner />
        <Cart />
        <Total />
        <Voucher />
      </div>
    </Provider>
  );
}

export default App;
