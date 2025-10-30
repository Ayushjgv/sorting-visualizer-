
import React, { useEffect, useState } from 'react';
import {
  Bubble, Quick,
  Insertion, Selection,Heap,
  Count, Shell,
  Radix, Bogo,
  Merge
} from './components/sortingmethods.jsx';

const App = () => {
  const [Arr, setArr] = useState([]);
  const [col, setcol] = useState('red');
  const [value, setvalue] = useState(20);
  const [speed, setspeed] = useState(10);
  const [speedtext, setspeedtext] = useState('select');
  const [sorting, setsorting] = useState('Bubble');
  const [issorting, setissorting] = useState(false);

  useEffect(() => {
    generateArray();
  }, [value]);

  function generateArray() {
    const arr = [];
    for (let i = 0; i < value; i++) {
      arr.push(Math.floor(Math.random() * 100) + 1);
    }
    setArr(arr);
  }

  async function handlesorting() {
    switch (sorting) {
      case 'Bubble': Bubble(Arr, setArr, setcol, speed, setissorting); break;
      case 'Merge':  Merge(Arr, setArr, setcol, speed, setissorting); break;
      case 'Quick': Quick(Arr, setArr, setcol, speed, setissorting); break;
      case 'Heap': await Heap(Arr, setArr, setcol, speed, setissorting); break;
      case 'Insertion': Insertion(Arr, setArr, speed, setissorting); break;
      case 'Selection': Selection(Arr, setArr, speed, setissorting); break;
      case 'Count':  Count(Arr, setArr, setcol, speed, setissorting); break;
      case 'Shell':  Shell(Arr, setArr, setcol, speed, setissorting); break;
      case 'Radix':  Radix(Arr, setArr, setcol, speed, setissorting); break;
      case 'Bogo':  Bogo(Arr, setArr, setcol, speed, setissorting); break;
      default: break;
    }
  }

  return (
    <div className='bodyy'>
      <div className="container">
        {Arr.map((value, index) => (
          <div key={index} className="bar"
            style={{ height: `${value * 5}px`, backgroundColor: `hsl(${value * 3}, 500%, 70%)` }}>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button className='btn' onClick={handlesorting} disabled={issorting}>Sort</button>
        <button className='btn' onClick={generateArray} disabled={issorting}>Generate Array</button>

        <select id='speed' value={sorting} disabled={issorting}
          onChange={e => setsorting(e.target.value)}>
          <option value="Bubble">Bubble Sort</option>
          <option value="Merge">Merge Sort</option>
          <option value="Quick">Quick Sort</option>
          <option value="Heap">Heap Sort</option>
          <option value="Insertion">Insertion Sort</option>
          <option value="Selection">Selection Sort</option>
          <option value="Count">Count Sort</option>
          <option value="Shell">Shell Sort</option>
          <option value="Radix">Radix Sort</option>
          <option value="Bogo">Bogo Sort</option>
        </select>

        <input type="range" min={5} max={400} value={value}
          onChange={e => setvalue(e.target.value)} />
        <p>Bars: {value}</p>

        <select id='speed' value={speedtext} disabled={issorting}
          onChange={e => {
            if (e.target.value === 'slow') { setspeed(100); setspeedtext('slow'); }
            else if (e.target.value === 'medium') { setspeed(25); setspeedtext('medium'); }
            else if (e.target.value === 'fast') { setspeed(1); setspeedtext('fast'); }
          }}>
          <option value="">Speed</option>
          <option value="slow">Slow</option>
          <option value="medium">Medium</option>
          <option value="fast">Fast</option>
        </select>
        <p>Speed: {speed} ms</p>
      </div>
    </div>
  );
};

export default App;



// import React, { useEffect, useState } from 'react'
// // import{Bubble, Merge, Quick, Heap,
// //        Insertion, Selection,
// //        Count, Shell, Radix,
// //        Bogo} from './components/sortingmethods.jsx';


// const App = () => {


//   const [Arr, setArr] = useState([])
//   const [col, setcol] = useState('red')
//   const [value, setvalue] = useState(20)
//   const [speed, setspeed] = useState(10)
//   const [speedtext, setspeedtext] = useState('select')
//   const [sorting, setsorting] = useState('Bubble')
//   const [issorting, setissorting] = useState(false)

//   let arr=[]



//   useEffect(()=>{
//     setArr(arr)
//     arr=[];
//     for(let i=0;i<value;i++){
//       let a=Math.floor(Math.random()*100)+1;
//       arr.push(a);
//     }
//     setArr([...arr]);
//   },[value])


//   function handlesorting(){
//     if(sorting==='Bubble'){
//       Bubble();
//     }else if(sorting==='Merge'){
//       Merge();
//     }else if(sorting==='Quick'){
//       Quick();
//     }else if(sorting==='Heap'){
//       Heap();
//     }else if(sorting==='Insertion'){
//       Insertion();
//     }else if(sorting==='Selection'){
//       Selection();
//     }else if(sorting==='Count'){
//       Count();
//     }else if(sorting==='Shell'){
//       Shell();
//     }else if(sorting==='Radix'){
//       Radix();
//     }else if(sorting==='Bogo'){
//       Bogo();
//     }
//   }






//   async function Count() {
//   setissorting(true);
//   let array = [...Arr];

//   let max = Math.max(...array);
//   let min = Math.min(...array);
//   let range = max - min + 1;
//   let count = new Array(range).fill(0);
//   let output = new Array(array.length);

//   for (let i = 0; i < array.length; i++) {
//     count[array[i] - min]++;
//     setcol('yellow');
//     await new Promise(res => setTimeout(res, speed));
//   }

//   for (let i = 1; i < range; i++) count[i] += count[i - 1];

//   for (let i = array.length - 1; i >= 0; i--) {
//     output[count[array[i] - min] - 1] = array[i];
//     count[array[i] - min]--;
//     setArr([...output]);
//     setcol('red');
//     await new Promise(res => setTimeout(res, speed));
//   }

//   setArr([...output]);
//   setissorting(false);
// }









// async function Bogo() {
//   setissorting(true);
//   let array = [...Arr];

//   function isSorted(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i - 1] > arr[i]) return false;
//     }
//     return true;
//   }

//   function shuffle(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }

//   while (!isSorted(array)) {
//     shuffle(array);
//     setArr([...array]);
//     setcol('yellow');
//     await new Promise(res => setTimeout(res, speed));
//   }

//   setcol('green');
//   setissorting(false);
// }






// async function Shell() {
//   setissorting(true);
//   let array = [...Arr];
//   let n = array.length;

//   for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
//     for (let i = gap; i < n; i++) {
//       let temp = array[i];
//       let j = i;
//       while (j >= gap && array[j - gap] > temp) {
//         array[j] = array[j - gap];
//         j -= gap;
//         setArr([...array]);
//         setcol('yellow');
//         await new Promise(res => setTimeout(res, speed));
//       }
//       array[j] = temp;
//       setArr([...array]);
//       setcol('red');
//       await new Promise(res => setTimeout(res, speed));
//     }
//   }

//   setArr([...array]);
//   setissorting(false);
// }






// async function Radix() {
//   setissorting(true);
//   let array = [...Arr];

//   function getMax(arr) {
//     return Math.max(...arr);
//   }

//   async function countingSortByDigit(exp) {
//     let output = new Array(array.length).fill(0);
//     let count = new Array(10).fill(0);

//     for (let i = 0; i < array.length; i++) {
//       let digit = Math.floor(array[i] / exp) % 10;
//       count[digit]++;
//     }

//     for (let i = 1; i < 10; i++) count[i] += count[i - 1];

//     for (let i = array.length - 1; i >= 0; i--) {
//       let digit = Math.floor(array[i] / exp) % 10;
//       output[count[digit] - 1] = array[i];
//       count[digit]--;
//       setArr([...output]);
//       setcol('yellow');
//       await new Promise(res => setTimeout(res, speed));
//     }

//     for (let i = 0; i < array.length; i++) array[i] = output[i];
//     setArr([...array]);
//     setcol('red');
//     await new Promise(res => setTimeout(res, speed));
//   }

//   let max = getMax(array);
//   for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
//     await countingSortByDigit(exp);
//   }

//   setArr([...array]);
//   setissorting(false);
// }








//  async function Merge() {
//   setissorting(true);
//   let array = [...Arr];

//   async function merge(arr, l, m, r) {
//     let n1 = m - l + 1;
//     let n2 = r - m;

//     let L = arr.slice(l, m + 1);
//     let R = arr.slice(m + 1, r + 1);

//     let i = 0, j = 0, k = l;

//     while (i < n1 && j < n2) {
//       if (L[i] <= R[j]) {
//         arr[k++] = L[i++];
//       } else {
//         arr[k++] = R[j++];
//       }
//       setArr([...arr]);
//       setcol('yellow');
//       await new Promise(res => setTimeout(res, speed));
//     }

//     while (i < n1) {
//       arr[k++] = L[i++];
//       setArr([...arr]);
//       await new Promise(res => setTimeout(res, speed));
//     }

//     while (j < n2) {
//       arr[k++] = R[j++];
//       setArr([...arr]);
//       await new Promise(res => setTimeout(res, speed));
//     }
//   }

//   async function mergeSort(arr, l, r) {
//     if (l >= r) return;
//     let m = Math.floor((l + r) / 2);
//     await mergeSort(arr, l, m);
//     await mergeSort(arr, m + 1, r);
//     await merge(arr, l, m, r);
//   }

//   await mergeSort(array, 0, array.length - 1);
//   setissorting(false);
// }








//  async function Quick() {
//   setissorting(true);
//   let array = [...Arr];

//   async function partition(low, high) {
//     let pivot = array[high];
//     let i = low - 1;

//     for (let j = low; j < high; j++) {
//       if (array[j] < pivot) {
//         i++;
//         [array[i], array[j]] = [array[j], array[i]];
//         setArr([...array]);
//         setcol('yellow');
//         await new Promise(res => setTimeout(res, speed));
//       }
//     }
//     [array[i + 1], array[high]] = [array[high], array[i + 1]];
//     setArr([...array]);
//     setcol('red');
//     await new Promise(res => setTimeout(res, speed));
//     return i + 1;
//   }

//   async function quickSort(low, high) {
//     if (low < high) {
//       let pi = await partition(low, high);
//       await quickSort(low, pi - 1);
//       await quickSort(pi + 1, high);
//     }
//   }

//   await quickSort(0, array.length - 1);
//   setissorting(false);
// }









//   async function Heap() {
//   setissorting(true);
//   let array = [...Arr];
//   let n = array.length;

//   async function heapify(n, i) {
//     let largest = i;
//     let l = 2 * i + 1;
//     let r = 2 * i + 2;

//     if (l < n && array[l] > array[largest]) largest = l;
//     if (r < n && array[r] > array[largest]) largest = r;

//     if (largest !== i) {
//       [array[i], array[largest]] = [array[largest], array[i]];
//       setArr([...array]);
//       setcol('yellow');
//       await new Promise(res => setTimeout(res, speed));
//       await heapify(n, largest);
//     }
//   }

//   for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//     await heapify(n, i);
//   }

//   for (let i = n - 1; i > 0; i--) {
//     [array[0], array[i]] = [array[i], array[0]];
//     setArr([...array]);
//     setcol('red');
//     await new Promise(res => setTimeout(res, speed));
//     await heapify(i, 0);
//   }

//   setArr([...array]);
//   setissorting(false);
// }











//   async function Insertion() {
//     setissorting(true);
//     let array = [...Arr];
//     for (let i = 1; i < array.length; i++) {
//       let key = array[i];
//       let j = i - 1;
//       while (j >= 0 && array[j] > key) {
//         array[j + 1] = array[j];
//         j--;
//         setArr([...array]);
//         await new Promise(resolve => setTimeout(resolve, speed));

//       }
//       array[j + 1] = key;
//       setArr([...array]);
//       await new Promise(resolve => setTimeout(resolve, speed));

//     }
//     setissorting(false);
//   }












//   async function Selection() {
//     setissorting(true);
//     let arr = [...Arr];
//     for (let i = 0; i < arr.length; i++) {
//       let minIdx = i;
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[minIdx]) minIdx = j;
//       }
//       [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
//       setArr([...arr]);
//       await new Promise(resolve => setTimeout(resolve,speed));
//     }
//     setissorting(false);
//   }

//     async function Bubble() {
//       setissorting(true);
//       let array=[...Arr]
//       for (let i = 0; i < array.length - 1; i++) {
//         for (let j = 0; j < array.length-1-i ; j++) {

//           setcol('yellow');
//           if (array[j] > array[j + 1]) {
//             [array[j], array[j + 1]] = [array[j + 1], array[j]];
//           }
//           setArr([...array]);

//           await new Promise(resolve => setTimeout(resolve, speed));
//           setcol('red');
//         }
//       }
//       setissorting(false);
//     }










// function generateArray(){
//   arr=[];
//   for(let i=0;i<value;i++){
//     let a=Math.floor(Math.random()*100)+1;
//     arr.push(a);
//   }
//   setArr([...arr]);
// }





//   return (
//     <div className='bodyy'>
//       <div className="container">
//         {/* {Arr.map((value,index)=>{
//           return <div className="bar" key={index} style={{height:`${value*5}px`, backgroundColor: col}}>
//             {value}
//           </div>
//         })} */}
//         {Arr.map((value,index)=>{
//           return <div className="bar" key={index} style={{height:`${value*5}px`, backgroundColor: `hsl(${value * 3}, 500%, 70%)`}}>
//             {/* {value} */}
//           </div>
//         })}
//       </div>



//       <div className="buttons">
//         <button className='btn' onClick={handlesorting} disabled={issorting} >sort</button>
//         <button className='btn' onClick={generateArray} disabled={issorting}>generate array</button>
        

//         <select id="speed" selected="Bubble" value={sorting} disabled={issorting}
//         onChange={e=>{
//           // console.log(e.target.value)
//           if(e.target.value==='Bubble'){
//             setsorting('Bubble')
//           }else if(e.target.value==='Merge'){
//             setsorting('Merge')
//           }else if(e.target.value==='Quick'){
//             setsorting('Quick')
//           }else if(e.target.value==='Heap'){
//             setsorting('Heap')
//           }else if(e.target.value==='Insertion'){
//             setsorting('Insertion')
//           }else if(e.target.value==='Selection'){
//             setsorting('Selection')
//           }else if(e.target.value==='Count'){
//             setsorting('Count')
//           }else if(e.target.value==='Shell'){
//             setsorting('Shell')
//           }else if(e.target.value==='Radix'){
//             setsorting('Radix')
//           }else if(e.target.value==='Bogo'){
//             setsorting('Bogo')
//           }
//         }}>
//           <option value="Bubble">Bubble Sort</option>
//           <option value="Merge" >Merge Sort</option>
//           <option value="Quick">Quick Sort</option>
//           <option value="Heap">Heap Sort</option>
//           <option value="Insertion">Insertion Sort</option>
//           <option value="Selection">Selection Sort</option>
//           <option value="Count">count Sort</option>
//           <option value="Shell">Shell Sort</option>
//           <option value="Radix">Radix Sort</option>
//           <option value="Bogo">Bogo Sort</option>

//         </select>




//         <input id='slider' type="range" min={5} max={400} value={value} onChange={e=>{
//           setvalue(e.target.value)
//         }} />
//         <p id='valuetext'>Bars: <span id='span' >{value}</span></p>


//         <select id="speed" selected="speed" value={speedtext} disabled={issorting} onChange={e=>{
//           // console.log(e.target.value)
//           if(e.target.value==='slow'){
//             setspeed(100)
//             setspeedtext('slow')
//           }else if(e.target.value==='medium'){
//             setspeed(25)
//             setspeedtext('medium')
//           }else if(e.target.value==='fast'){
//             setspeed(1)
//             setspeedtext('fast')
//           }

//         }}>
//           <option value="">speed</option>
//           <option value="slow" >slow</option>
//           <option value="medium">medium</option>
//           <option value="fast">fast</option>
//         </select>
//         <p id='speedtext'> Speed: <span id='speedspan'>{speed} ms</span></p>



//       </div>
      

//     </div>
//   )
// }

// export default App



























// // import SortingVisualizer from './components/sortingvisualizer.jsx';
// // function App() {
// //   return <SortingVisualizer />;
// // }
// // export default App;


