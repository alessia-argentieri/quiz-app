import Quiz from "./components/Quiz";
import { data } from "./questions";

const App = () => {
  return (
    <>
      <Quiz questions={data} />
    </>
  );
};

export default App;
