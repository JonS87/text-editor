const editor = document.getElementById('editor');
const clearButton = document.getElementById('clear__button');

editor.value = localStorage.getItem('editor');

editor.addEventListener('keyup', () => {
  localStorage.setItem('editor', editor.value);
});

clearButton.addEventListener('click', (e) => {
  localStorage.removeItem('editor');
  editor.value = '';
});