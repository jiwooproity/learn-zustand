import "./index.css";

import { CountStoreIF } from "../../store/use-count-store";

type CountComponentType = (props: CountStoreIF) => JSX.Element;

const Count: CountComponentType = ({ count, increaseCount, decreaseCount }) => {
  return (
    <div className="count-container">
      <div className="count-section">
        <span className="count-text">{count}</span>
      </div>
      <div className="count-section">
        <button className="count-button" onClick={increaseCount}>
          +
        </button>
        <button className="count-button" onClick={decreaseCount}>
          -
        </button>
      </div>
    </div>
  );
};

export default Count;
