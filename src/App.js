
import './App.css';
import ButtonNumbers from './components/ButtonNumbers';
import ButtonSum from './components/ButtonSum';
import Result from './components/Result';

const numeros = [0,1,2,3,4,5,6,7,8,9]

function App() {
  return (
    <div className="App">
     <ButtonNumbers data = {numeros}/>
     <ButtonSum text = "+"/>
     <ButtonSum text = "-"/>
     <Result/>
    </div>
  );
}

export default App;
