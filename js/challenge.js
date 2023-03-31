var timersCount = 0;
var pause = false; //is timer paused

countTimers();

function countTimers() {
  timersCount++;
    
  var count = 0;
  var counter = setInterval(timer, 1000);

  let minus = document.getElementById('minus');
    minus.addEventListener('click',() => {
        count = count -2;
    });

    let plus = document.getElementById('plus');
    plus.addEventListener('click',() => {
        count = count + 2;
    })

  function timer() {
    if (!pause) { //do something if not paused
      count = count + 1;
      if (count < 0) {
        clearInterval(counter);
        setTimeout(countTimers, 5000); //start count from 26 again
        return;
      } 

      document.getElementById("counter").innerHTML = count;
    }
  }

//document.getElementById("countTimers").innerHTML = timersCount;
}

document.getElementById('pause').addEventListener('click', function () {
	pause = true;
    // if(pause) {
    //     pauseInterval(counter);
    // }else {
    //     pause = false;
    // }
});

let list = document.getElementById('list');

let p = document.createElement('p');
p.innerText = document.getElementById("user_input").value;
let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    return p;
    
})

list.appendChild(p);


// function showInput() {
//     document.getElementById('submit').innerHTML = 
//                 document.getElementById("user_input").value;
//         }