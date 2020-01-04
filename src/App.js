import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

// 고객정보 추가 방법
const customers = [
  {
     'id' : 1,
  'image' : 'http://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
  },
  {
    'id' : 2,
 'image' : 'http://placeimg.com/64/64/2',
 'name' : '임꺽정',
 'birthday' : '931222',
 'gender' : '남자',
 'job' : '프로그래머'
 },
 {
  'id' : 3,
'image' : 'http://placeimg.com/64/64/3',
'name' : '이순신',
'birthday' : '921205',
'gender' : '남자',
'job' : '디자이너'
}
]
 

class App extends Component {
  render(){
    return (
      // Customer => src/components/Customer.js
      //<Customer/>
      <div>

     {/* <Customer
      id={customers[0].id}
      name={customers[0].name}
      birthday={customers[0].birthday}
      gender={customers[0].gender}
      job={customers[0].job}
      />

      <Customer
      id={customers[1].id}
      name={customers[1].name}
      birthday={customers[1].birthday}
      gender={customers[1].gender}
      job={customers[1].job}
      />

      <Customer
      id={customers[2].id}
      name={customers[2].name}
      birthday={customers[2].birthday}
      gender={customers[2].gender}
      job={customers[2].job}
     />*/}

     {/*자바스크립트 제공 'map' 이 기능은 관리하기에 아주 좋다 */}
     {/* 'key'는 아이디 중복 방지 */}
     {/* props는 해당 함수를 보내는 역할 */}


     {
       customers.map(c => {
         return (
  
         <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>  
          
         
         )
       })
     }


     </div>


    );
  }
}

export default App;
