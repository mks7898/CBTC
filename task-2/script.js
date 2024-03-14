const inputBox = document.querySelector('#input-box');
const listContEl = document.querySelector('#list-container');
const buttonEl  = document.querySelector('#btn1');

buttonEl.addEventListener("click",()=>{
  if (inputBox.value === ''){
    alert('write here something')
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContEl.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7'
    li.appendChild(span)
  }
  inputBox.value = '';
  saveData();

})

listContEl.addEventListener("click",(e)=>{
  if (e.target.tagName == 'LI'){
    e.target.classList.toggle('checked');
    saveData();
  }
  else if(e.target.tagName == 'SPAN'){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContEl.innerHTML);
}

function showData(){
  listContEl.innerHTML = localStorage.getItem("data")
}
showData();