import Quiz from "./components/Quiz";
import { data } from "./questions";

const App = () => {
  return (
    <>
      <Quiz questions={data.questions} />
    </>
  );
};

export default App;
