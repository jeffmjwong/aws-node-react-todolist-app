import './index.scss';

const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'This is from js file.';
newParagraph.classList.add('background-main');
newParagraph.classList.add('ml2');
document.body.appendChild(newParagraph);

const button1 = document.getElementById('button1');
button1.addEventListener('click', function() {
  console.log('Button 1 has been clicked!');
});

