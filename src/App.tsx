import './App.css';
import {Person,Country} from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person 
      name="Jiali" 
      email="zhangjiali86@gmail.com "
      age={18}
      isMarried={true}
      friends={["a","b","c"]}
      country= {Country.Brazil}/>

    </div>
  );
}

export default App;
