import { useState } from "react"

//상태 변화 - useState() 함수
const Counter = () => {
  //value값을 0으로 초기화 const value = 0;
  const [value, setValue] = useState(0);
  
  //숫자를 1 더하는 함수
  const addValue = () => {
    setValue(value + 1);
  }
  //숫자를 1 빼는 함수
  const subValue = () => {
    setValue(value - 1);
  }

  //숫자를 0으로 만드는 함수
  const zeroValue = () => {
    setValue(0);
  }

  return(
    <div>
      <h3>현재값: {value}</h3>
      <button onClick={addValue}>증가</button>
      <button onClick={subValue}>감소</button>
      <button onClick={zeroValue}>초기화</button>
    </div>
  )
}

export default Counter;