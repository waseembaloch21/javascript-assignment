 let redInput = document.getElementById('red');
 let greenInput = document.getElementById('green');
 let blueInput = document.getElementById('blue');
 let result = document.getElementById('result');

function update() {
    let red = redInput.value;
     let green = greenInput.value;
     let blue = blueInput.value;

     document.getElementById('color-box').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
 }


 update();