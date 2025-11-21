import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import DisplayCounter1 from "./components/DisplayCounter1";

function App() {
  const counter = useSelector((store) => store.hide);
  return (
    <center>
      <Container>
        <Header />
        {counter === true ? <DisplayCounter1 /> : <DisplayCounter />}

        <Controls />
      </Container>
    </center>
  );
}

export default App;
