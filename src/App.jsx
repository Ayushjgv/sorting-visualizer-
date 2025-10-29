import React, { useEffect, useState } from 'react'

const App = () => {


  const [Arr, setArr] = useState([])
  const [col, setcol] = useState('red')
  const [value, setvalue] = useState(20)
  const [speed, setspeed] = useState(10)
  const [speedtext, setspeedtext] = useState('select')

  let arr=[]



  useEffect(()=>{
    setArr(arr)
    arr=[];
    for(let i=0;i<value;i++){
      let a=Math.floor(Math.random()*100)+1;
      arr.push(a);
    }
    setArr([...arr]);
  },[value])

  async function sort() {
    let array=[...Arr]
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length-1-i ; j++) {

        setcol('yellow');
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
        setArr([...array]);

        await new Promise(resolve => setTimeout(resolve, speed));
        setcol('red');
      }
    }
  }





function generateArray(){
  arr=[];
  for(let i=0;i<value;i++){
    let a=Math.floor(Math.random()*100)+1;
    arr.push(a);
  }
  setArr([...arr]);
}











  return (
    <div className='bodyy'>
      <div className="container">
        {/* {Arr.map((value,index)=>{
          return <div className="bar" key={index} style={{height:`${value*5}px`, backgroundColor: col}}>
            {value}
          </div>
        })} */}
        {Arr.map((value,index)=>{
          return <div className="bar" key={index} style={{height:`${value*5}px`, backgroundColor: `hsl(${value * 3}, 500%, 70%)`}}>
            {/* {value} */}
          </div>
        })}


      </div>
      <div className="buttons">
        <button className='btn' onClick={sort}>sort</button>
        <button className='btn' onClick={generateArray}>generate array</button>



        <input id='slider' type="range" min={5} max={70} value={value} onChange={e=>{
          setvalue(e.target.value)
        }} />
        <p id='valuetext'>Bars: <span id='span' >{value}</span></p>


        <select id="speed" selected="speed" value={speedtext} onChange={e=>{
          // console.log(e.target.value)
          if(e.target.value==='slow'){
            setspeed(100)
            setspeedtext('slow')
          }else if(e.target.value==='medium'){
            setspeed(25)
            setspeedtext('medium')
          }else if(e.target.value==='fast'){
            setspeed(2)
            setspeedtext('fast')
          }

        }}>
          <option value="">speed</option>
          <option value="slow" >slow</option>
          <option value="medium">medium</option>
          <option value="fast">fast</option>
        </select>
        <p id='speedtext'> Speed: <span id='speedspan'>{speed} ms</span></p>
      </div>
      

    </div>
  )
}

export default App



























// import SortingVisualizer from './components/sortingvisualizer.jsx';
// function App() {
//   return <SortingVisualizer />;
// }
// export default App;
