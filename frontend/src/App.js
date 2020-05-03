import React from 'react';
import './App.css';
//import { BrowserRouter, Route } from "react-router-dom";
//import LoginPage from './pages/LoginPage'
//import Main from './pages/Main'
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from './pages/Main';
function App() {
  //  const [toenter, setToenter] = useState(false)
  return (
    <Provider store={store}>
        <Main />
    </Provider>
  )
  //<BrowserRouter>
  //<div style={{ width: "100%", height: "100%" }}>
  //<Route exact path="/"
  //render={() => <LoginPage setToenter={setToenter} toenter={toenter} />} />
  //<Route exact path="/main" 
  //render={() => <Main setToenter={setToenter} toenter={toenter}/>} />
  // {/* // <LoginPage setToenter={setToenter} toenter={toenter} /> */}
  //</div>

  //</BrowserRouter>
  // );
}

export default App;
