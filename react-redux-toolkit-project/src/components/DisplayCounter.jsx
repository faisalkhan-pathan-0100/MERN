import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counterObj = useSelector((store) => store.counter); //store.sliceName and it return the initial state object only not whole slice
  // console.log(counterObj);
  const counter = counterObj.counterValue;
  // console.log(counter);
  return <h4>current value of counter is: {counter}</h4>;
};
export default DisplayCounter;
