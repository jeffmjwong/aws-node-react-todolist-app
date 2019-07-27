import './index.css';

const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'This is from js file.';
newParagraph.classList.add('cyan-background');

document.body.appendChild(newParagraph);
