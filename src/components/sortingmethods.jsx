// sortingmethods.jsx
// All sorting algorithms live here
export async function Bubble(Arr, setArr, setcol, speed, setissorting) {
  setissorting(true);
  let array = [...Arr];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      setcol('yellow');
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      setArr([...array]);
      await new Promise(res => setTimeout(res, speed));
      setcol('red');
    }
  }
  setissorting(false);
}

export async function Selection(Arr, setArr, speed, setissorting) {
  setissorting(true);
  let array = [...Arr];
  for (let i = 0; i < array.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) minIdx = j;
    }
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
    setArr([...array]);
    await new Promise(res => setTimeout(res, speed));
  }
  setissorting(false);
}

export async function Insertion(Arr, setArr, speed, setissorting) {
  setissorting(true);
  let array = [...Arr];
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
      setArr([...array]);
      await new Promise(res => setTimeout(res, speed));
    }
    array[j + 1] = key;
    setArr([...array]);
    await new Promise(res => setTimeout(res, speed));
  }
  setissorting(false);
}

export async function Quick(Arr, setArr, setcol, speed, setissorting) {
  setissorting(true);
  let array = [...Arr];

  async function partition(low, high) {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        setArr([...array]);
        setcol('yellow');
        await new Promise(res => setTimeout(res, speed));
      }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    setArr([...array]);
    setcol('red');
    await new Promise(res => setTimeout(res, speed));
    return i + 1;
  }

  async function quickSort(low, high) {
    if (low < high) {
      let pi = await partition(low, high);
      await quickSort(low, pi - 1);
      await quickSort(pi + 1, high);
    }
  }

  await quickSort(0, array.length - 1);
  setissorting(false);
}


 export  async function Count(Arr, setArr, setcol, speed, setissorting) {
  setissorting(true);
  let array = [...Arr];

  let max = Math.max(...array);
  let min = Math.min(...array);
  let range = max - min + 1;
  let count = new Array(range).fill(0);
  let output = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    count[array[i] - min]++;
    setcol('yellow');
    await new Promise(res => setTimeout(res, speed));
  }

  for (let i = 1; i < range; i++) count[i] += count[i - 1];

  for (let i = array.length - 1; i >= 0; i--) {
    output[count[array[i] - min] - 1] = array[i];
    count[array[i] - min]--;
    setArr([...output]);
    setcol('red');
    await new Promise(res => setTimeout(res, speed));
  }

  setArr([...output]);
  setissorting(false);
}









export async function Bogo(Arr, setArr, setcol, speed, setissorting) {
  setissorting(true);
  let array = [...Arr];

  function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) return false;
    }
    return true;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  while (!isSorted(array)) {
    shuffle(array);
    setArr([...array]);
    setcol('yellow');
    await new Promise(res => setTimeout(res, speed));
  }

  setcol('green');
  setissorting(false);
}






export async function Shell(Arr, setArr, setcol, speed, setissorting) {
  setissorting(true);
  let array = [...Arr];
  let n = array.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = array[i];
      let j = i;
      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
        setArr([...array]);
        setcol('yellow');
        await new Promise(res => setTimeout(res, speed));
      }
      array[j] = temp;
      setArr([...array]);
      setcol('red');
      await new Promise(res => setTimeout(res, speed));
    }
  }

  setArr([...array]);
  setissorting(false);
}






export async function Radix(Arr, setArr, setcol, speed, setissorting) {
  setissorting(true);
  let array = [...Arr];

  function getMax(arr) {
    return Math.max(...arr);
  }

  async function countingSortByDigit(exp) {
    let output = new Array(array.length).fill(0);
    let count = new Array(10).fill(0);

    for (let i = 0; i < array.length; i++) {
      let digit = Math.floor(array[i] / exp) % 10;
      count[digit]++;
    }

    for (let i = 1; i < 10; i++) count[i] += count[i - 1];

    for (let i = array.length - 1; i >= 0; i--) {
      let digit = Math.floor(array[i] / exp) % 10;
      output[count[digit] - 1] = array[i];
      count[digit]--;
      setArr([...output]);
      setcol('yellow');
      await new Promise(res => setTimeout(res, speed));
    }

    for (let i = 0; i < array.length; i++) array[i] = output[i];
    setArr([...array]);
    setcol('red');
    await new Promise(res => setTimeout(res, speed));
  }

  let max = getMax(array);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    await countingSortByDigit(exp);
  }

  setArr([...array]);
  setissorting(false);
}








 export async function Merge(Arr, setArr, setcol, speed, setissorting) {
  setissorting(true);
  let array = [...Arr];

  async function merge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = arr.slice(l, m + 1);
    let R = arr.slice(m + 1, r + 1);

    let i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k++] = L[i++];
      } else {
        arr[k++] = R[j++];
      }
      setArr([...arr]);
      setcol('yellow');
      await new Promise(res => setTimeout(res, speed));
    }

    while (i < n1) {
      arr[k++] = L[i++];
      setArr([...arr]);
      await new Promise(res => setTimeout(res, speed));
    }

    while (j < n2) {
      arr[k++] = R[j++];
      setArr([...arr]);
      await new Promise(res => setTimeout(res, speed));
    }
  }

  async function mergeSort(arr, l, r) {
    if (l >= r) return;
    let m = Math.floor((l + r) / 2);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
  }

  await mergeSort(array, 0, array.length - 1);
  setissorting(false);
}








  export async function Heap(Arr, setArr, setcol, speed, setissorting) {
  setissorting(true);
  let array = [...Arr];
  let n = array.length;

  async function heapify(n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && array[l] > array[largest]) largest = l;
    if (r < n && array[r] > array[largest]) largest = r;

    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]];
      setArr([...array]);
      setcol('yellow');
      await new Promise(res => setTimeout(res, speed));
      await heapify(n, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    setArr([...array]);
    setcol('red');
    await new Promise(res => setTimeout(res, speed));
    await heapify(i, 0);
  }

  setArr([...array]);
  setissorting(false);
}










