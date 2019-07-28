import './index.scss';

const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'This is from js file.';
newParagraph.classList.add('background-main');
newParagraph.classList.add('ml2');

document.body.appendChild(newParagraph);
