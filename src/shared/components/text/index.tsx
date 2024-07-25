import "./index.css";

import { TextStoreIF } from "../../store/use-text-store";

type TextComponentType = (props: TextStoreIF) => JSX.Element;

const Text: TextComponentType = ({ text, changeText }) => {
  return (
    <div className="input-container">
      <input value={text} onChange={changeText}></input>
    </div>
  );
};

export default Text;
