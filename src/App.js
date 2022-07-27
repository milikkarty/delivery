import CurrencyFilter from "./features/currencyFilter/CurrencyFilter";
import Search from "./features/search/Search";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";

function App() {
  return (
    <div className="App">
      <CurrencyFilter />
      <Search />
      <Menu />
      <Cart />
    </div>
  );
}

export default App;
