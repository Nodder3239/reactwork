import MyComponent from './MyComponent1';
import Counter from './components/Counter';
import InputOnChange1 from './components/InputOnChange1';
import TextState from './components/TextState';

const Home = () => {
  return(
    <div className="home">
      <h2>리액트 실습하기</h2>
      <MyComponent name={"우영우"} age={27} />
      <Counter />
      <TextState />
      <InputOnChange1 />
    </div>
  )
}

export default Home;