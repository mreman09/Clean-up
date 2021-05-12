menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
});

add.addEventListener('click', ev => {

  if(text.value) {      // check we have data
    addItem(text.value);
    text.value = null;  // clear the input
    text.focus();       // give it the focus
  }
});

text.addEventListener('keydown', ev => {
  if(ev.key == "Enter") {
    add.click();
  }
});

function addItem(text, done) {
  const item = document.createElement('li');
  item.setAttribute("style", "padding: 1em 0.5rem;margin: 0;color: #001a33; display: flex;font-size: 20px;justify-content: space-between;margin-top: 3px;align-content: center");
  const label = document.createElement('label');
  const input = document.createElement('input');
  label.textContent = text;
  input.type = "checkbox";
  input.checked = done;
  input.id = `todo${todo.querySelectorAll('li').length + 1}`;
  label.htmlFor = input.id;
  item.appendChild(label);
  item.appendChild(input);
  todo.appendChild(item);

  const button = document.createElement('button');
  button.textContent = "×";
  button.setAttribute("style", "height: 30px;line-height:25px; border: 2px solid #000; width: 45px;font-weight: bold; margin: 0; padding: 0; text-align: center;}");
  button.addEventListener('click', ev => {
  item.remove();
  });
  item.appendChild(button);
}

function clearList() {
  while(todo.firstChild) {
    todo.removeChild(todo.firstChild);
  }
}

clear.addEventListener('click', ev => {
  clearList();
});
