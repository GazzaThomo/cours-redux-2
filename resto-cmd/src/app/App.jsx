import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
import { Cart } from "../features/cart/Cart.jsx";
import { Total } from "../features/total/total.jsx";
import { Voucher } from "../features/voucher/Vocher.jsx";
import { Owner } from "../features/owner/Owner.jsx";
import { Menu } from "../features/menu/Menu.jsx";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Menu />
        <Cart />
        <Total />
        <Voucher />
        <Owner />
      </div>
    </Provider>
  );
}

export default App;
