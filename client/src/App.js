import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent1';

function App() {
  return (
    <div className="App">
      <h1>리액트 시작하기</h1>
      <MyComponent name={"우영우"} age={27} />
      <img src={logo} className='App-logo' alt='' />
    </div>
  );
}

export default App;
