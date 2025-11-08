import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Controls = () => {
  const incdec = useRef();

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrmentHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const hidehandler = () => {
    dispatch({ type: "HIDE_SHOW" });
  };

  const incdecHandler = () => {
    console.log(incdec);
    dispatch({
      type: "INC_DEC",
      payload: {
        counter: incdec.current.value,
      },
    });
  };
  return (
    <div>
      <div>
        <button
          type="button"
          class="btn btn-outline-primary m-2"
          onClick={incrementHandler}
        >
          +1
        </button>
        <button
          type="button"
          class="btn btn-outline-warning"
          onClick={decrmentHandler}
        >
          -1
        </button>
        <button
          type="button"
          class="btn btn-outline-warning"
          onClick={hidehandler}
        >
          Hide
        </button>
      </div>

      <div class="input-group mb-3  controler-container">
        <input
          type="number"
          class="form-control"
          placeholder="Increment or Decrement by"
          className="input"
          ref={incdec}
        />
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={incdecHandler}
        >
          Go
        </button>
      </div>
    </div>
  );
};
export default Controls;
