import React, { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const HANDLE_SUBMIT = "add_it";
const HANDLE_CHANGE = "handle-change";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };

    case HANDLE_CHANGE:
      return {
        ...state,
        valueToAdd: action.payLoad,
      };
    case HANDLE_SUBMIT:
      return {
        ...state,
        count: state.count + parseInt(state.valueToAdd),
        valueToAdd: 0,
      };
  }

  return state;
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: HANDLE_SUBMIT,
    });
  };

  const handleChange = (userInput) => {
    dispatch({
      type: HANDLE_CHANGE,
      payLoad: parseInt(userInput.target.value) || 0,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Counter: {state.count}</h1>
      <div className="flex flex-row mt-5">
        <Button className="mr-3" success onClick={increment}>
          Increment Counter
        </Button>
        <Button danger onClick={decrement}>
          Decrement Counter
        </Button>
      </div>
      <form className="mt-5" onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 ml-3 bg-gray-50 border border-gray-300"
          onChange={handleChange}
          value={state.valueToAdd || ""}
        />
        <Button primary className="mt-5">
          Add it!
        </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
