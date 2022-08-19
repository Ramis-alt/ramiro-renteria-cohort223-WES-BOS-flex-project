const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));



let theParent = document.querySelector("#bigdog");
theParent.addEventListener("click", doSomething,);

function doSomething(e) { //the event argument e determines what event was clicked on
  if (e.target !== e.currentTarget) {
    let clickedItem = e.target.id
  }
  e.stopPropagation(); //prevent the event from spilling over to to other elements
}



function play(audioID) {
  let soundFive = document.getElementById(audioID);
  soundFive.play();
  
}