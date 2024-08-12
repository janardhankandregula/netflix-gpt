import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./components/Login";
import appStore from "./utilis/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Body />
      </div>
    </Provider>
  );
}

export default App;
