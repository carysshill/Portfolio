console.log("Hello World")
console.log(new Date().getFullYear())
document.getElementById("footer").innerHTML = ("Free to use under the Unsplash License "+(new Date().getFullYear()))
sayHello = () => {
        alert("hey girl");
}
document.getElementById('Cute-Dogs').onmouseover = () => { 
    document.getElementById('Cute-Dogs').innerText =  'boo!!';
};
document.getElementById('Cute-Dogs').onmouseleave = () => {
    document.getElementById('Cute-Dogs').innerText = 'Cute Dogs';
}
 let count = 1;
 document.getElementById('btn-counter').onclick = () => {
    count = count + 1;
    if (count % 2 === 0 ) {
        document.getElementById('txt-counter').classList.add('even');
        document.getElementById('txt-counter').classList.remove('odd');
    } else {
        document.getElementById('txt-counter').classList.add('odd');
        document.getElementById('txt-counter').classList.remove('even');
    }
    document.getElementById('txt-counter').innerHTML = count
}
for (let i = 1; i <= 99; i = i + 1) {
    const newLi = document.createElement('Li');
    newLi.textContent = i;
    document.getElementById('numbers').appendChild(newLi)
    if (count % 2 === 0) {
        document.getElementById('numbers').classList.add('even');
        document.getElementById('numbers').classList.remove('odd');
    } else {
        document.getElementById('numbers').classList.add('odd');
        document.getElementById('numbers').classList.remove('even');
    }
}


