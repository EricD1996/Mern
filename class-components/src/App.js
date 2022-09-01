import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
  const appJsx = (
    <div>
      <h1>Hello from create react app!</h1>
      <Counter title="Beans" start={3} step={5}/>
      <Counter title="Number of M&Ms stacked as a tower"/>
      <Counter title="Bugs"/>

    </div>
  );
      console.log(appJsx);
      return appJsx;
}

export default App;
