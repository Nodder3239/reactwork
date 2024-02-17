//함수형 컴포넌트, 클래스형 컴포넌트
//onChange속성 - 글자 입력하면 계속 변경됨

import { useState } from "react";

//event 매개변수 사용
const InputOnChange1 = () => {

  const [name, setName] = useState('');

  const onChangeName = (e) =>{
    setName(e.target.value);
  }

  return(
    <>
      <div>
        <input 
          type="text"

          onChange={onChangeName}

          /*onChange={(event) => {
            //console.log(event);
            console.log(event.target.value);
          }}*/

        />
      </div>
      <div>
        <h3>이름: {name}</h3>
      </div>
    </>
  )
}

export default InputOnChange1