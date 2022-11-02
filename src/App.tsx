import React, {MouseEvent,useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";
import {Button} from "./components/Button";
import {MonyComponent} from "./components/MonyComponent";
type FilterType = 'all' | 'rubl' | 'dollar'


function App() {
  const [students, setStudents] = useState([
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
  ])

  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ]

  const myFirstSubscriber = (e:MouseEvent<HTMLButtonElement>) => {
    console.log('i`m Ivan')
  }
  const mySecondSubscriber = (e:MouseEvent<HTMLButtonElement>) => {
    console.log('i`m Vasya')
  }
  
  const button1Foo = (subscriber:string) => {
    console.log(subscriber)
  }
  const button2Foo = (subscriber:string) => {
    console.log(subscriber)
  }

  const [filter,setFilter] = useState<FilterType>('all')

  let currentMoney = money

  if (filter === 'rubl') {
    currentMoney = money.filter(f => f.banknots === 'RUBLS')
  }
  if (filter === 'dollar') {
    currentMoney = currentMoney.filter(f => f.banknots === 'Dollars')
  }
  const onClickFilterHandler = (buttonName:FilterType) => {
    setFilter(buttonName)
  }
  
    return (
        <div className="App">
            <NewComponent students={students} topCars={topCars}/>

          <Button name={'Youtube chanel 1'} callBack={()=>button1Foo('hi 1')} />
          <Button name={'Youtube chanel 2'} callBack={()=>button2Foo('hi 2')}/>

          <MonyComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>

         {/* <ul>
            {currentMoney.map((m,i)=>{
              return(
                  <li key={i}>
                    <span>{m.banknots} -- </span>
                    <span>{m.value} -- </span>
                    <span>{m.number}</span>
                  </li>
              )
            })}
          </ul>
          <button onClick={()=>onClickFilterHandler('all')} >all</button>
          <button onClick={()=>onClickFilterHandler('rubl')} >rubl</button>
          <button onClick={()=>onClickFilterHandler('dollar')} >dollar</button>*/}

        </div>
    );
}

export default App;
