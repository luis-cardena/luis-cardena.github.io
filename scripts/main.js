let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/fedora.png') {
        myImage.setAttribute('src', 'images/bluehat.png');
    }
    else {
        myImage.setAttribute('src', 'images/fedora.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Welcome, ${myName}!`;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName + '!';
  }

  myButton.onclick = function() {
    setUserName();
  }
