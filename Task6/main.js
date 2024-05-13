function createArray(startIndex, endIndex) {
  let MyArray = [];
  for (let i = startIndex; i <= endIndex; i++) {
    MyArray.push(i);
  }
  return MyArray;
}

function removeMultiplesOfNumber(mod, MyArray) {
  for (let i = 0; i < MyArray.length; i++) {
    if (MyArray[i] % mod == 0) {
      MyArray.splice(i, 1);
    }
  }
  return MyArray;
}

function addNumberToArray(num, MyArray) {
  for (let i = 0; i < MyArray.length; i++) {
    MyArray[i] = MyArray[i] + num;
  }
  return MyArray;
}
function PrintSelectedNumbers(MyArray, start, end) {
  for (let i = start; i <= end; i++) {
    console.log(MyArray[i]);
  }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function sortDescending(array) {
        array.sort(function(a, b) {
            return b - a;
        });
    }

document.getElementById("myButton1").addEventListener("click", function () {
  let MyArray = createArray(0, 100);
  MyArray = removeMultiplesOfNumber(3, MyArray);
  console.log(MyArray);
});

document.getElementById("myButton2").addEventListener("click", function () {
  let MyArray = createArray(0, 100);
  let MyArray2 = createArray(101, 150);
  MyArray = MyArray.concat(MyArray2);

  console.log(MyArray);
});

document.getElementById("myButton3").addEventListener("click", function () {
  let MyArray = createArray(0, 100);
  MyArray = addNumberToArray(3, MyArray);
  console.log(MyArray);
});

document.getElementById("myButton4").addEventListener("click", function () {
  let MyArray = createArray(0, 100);
  PrintSelectedNumbers(MyArray, 20, 40);
});

document.getElementById("myButton5").addEventListener("click", function () {
    let MyArray = createArray(0, 100);
    shuffleArray(MyArray);
    console.log(MyArray);
    sortDescending(MyArray);
    console.log(MyArray);

});
