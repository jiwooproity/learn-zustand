import "./count-page.css";

import { Count } from "../shared/components";
import { useCountStore } from "../shared/store/use-count-store";

const CountPage = () => {
  const { count, increaseCount, decreaseCount } = useCountStore();

  return (
    <div className="counter-container">
      <Count count={count} increaseCount={increaseCount} decreaseCount={decreaseCount} />
    </div>
  );
};

export default CountPage;
