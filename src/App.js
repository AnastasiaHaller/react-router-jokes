import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/layout/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </main>
    </div>
  );
}

export default App;
