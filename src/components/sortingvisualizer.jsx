import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";

export default function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 100) + 5);
    setArray(arr);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    setSorting(true);
    let arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await sleep(speed);
        }
      }
    }
    setSorting(false);
  };

  const selectionSort = async () => {
    setSorting(true);
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) minIdx = j;
      }
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      setArray([...arr]);
      await sleep(speed);
    }
    setSorting(false);
  };

  const insertionSort = async () => {
    setSorting(true);
    let arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
        setArray([...arr]);
        await sleep(speed);
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await sleep(speed);
    }
    setSorting(false);
  };

  return (
    <div className="visualizer-container">
      <h1>Sorting Visualizer 🔢</h1>

      <div className="controls">
        <button onClick={generateArray} disabled={sorting}>
          Generate New
        </button>
        <button onClick={bubbleSort} disabled={sorting}>
          Bubble Sort
        </button>
        <button onClick={selectionSort} disabled={sorting}>
          Selection Sort
        </button>
        <button onClick={insertionSort} disabled={sorting}>
          Insertion Sort
        </button>
      </div>

      <div className="bars-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${value * 3}px`,
              backgroundColor: `hsl(${value * 3}, 70%, 55%)`,
            }}
          ></div>
        ))}
      </div>

      <div className="slider">
        <label>Speed: {speed} ms</label>
        <input
          type="range"
          min="10"
          max="300"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
