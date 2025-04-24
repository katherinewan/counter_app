const counterDiv = document.getElementById('num');
const plus = document.getElementById('plus');
const reset = document.getElementById('reset');
const bin = document.getElementById('bin');

let count = 0;
counterDiv.textContent = count;

const updateCount = () => {
  counterDiv.textContent = count;
}

plus.addEventListener('click', () => {
  count += 1;
  updateCount();
});

function AddTrash() {
  const trash = document.createElement('img');
  trash.src = "paper.png";
  trash.alt = 'trash';
  trash.className = 'trash';
  bin.appendChild(trash); 
}

function ClearTrash() {
  bin.innerHTML = '';
}

document.getElementById('plus').onclick = AddTrash;

reset.addEventListener('click', () => {
  count = 0;
  ClearTrash();
  updateCount();
})
