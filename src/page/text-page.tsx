import "./text-page.css";

import { Text } from "../shared/components";
import { useTextStore } from "../shared/store/use-text-store";

const TextPage = () => {
  const { text, changeText } = useTextStore();

  return (
    <div className="text-container">
      <Text text={text} changeText={changeText} />
    </div>
  );
};

export default TextPage;
