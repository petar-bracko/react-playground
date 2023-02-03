import { DummyProvider } from "context/DummyProvider";
import { Router } from "router/Router";
import "./App.css";

const App = () => (
  <DummyProvider>
    <Router />
  </DummyProvider>
);

export default App;
