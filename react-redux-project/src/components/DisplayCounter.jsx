import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return <h4>current value of counter is: {counter}</h4>;
};
export default DisplayCounter;
