const buttonRandomColor = document.getElementById('button-random-color');
const colorRandons = document.querySelectorAll('#color-palette .color');
const pixelBoard = document.getElementById('pixel-board');
const inputBoardSize = document.getElementById('board-size');
const buttonBoardSize = document.getElementById('generate-board');

pixelBoard.style.display = 'grid';
pixelBoard.style.gridTemplateColumns = 'repeat(5, 40px)';

colorRandons[0].style.background = 'black';

const generateColors = () => {
  const hexadecimais = '0123456789';
  let color = '#';

  for (let index = 1; index <= 6; index += 1) {
    const colorRandom = Math.floor(Math.random() * hexadecimais.length);
    color += `${colorRandom}`;
  }
  return color;
};

if (localStorage.length === 0) {
  localStorage.setItem(
    'colorPalette',
    (colorRandons[1].style.background = 'purple')
  );
  localStorage.setItem(
    'colorPalette1',
    (colorRandons[2].style.background = 'blue')
  );
  localStorage.setItem(
    'colorPalette2',
    (colorRandons[3].style.background = 'pink')
  );
}

const colorsRandom = () => {
  colorRandons[1].style.background = generateColors();
  colorRandons[2].style.background = generateColors();
  colorRandons[3].style.background = generateColors();

  localStorage.setItem('colorPalette', colorRandons[1].style.background);
  localStorage.setItem('colorPalette1', colorRandons[2].style.background);
  localStorage.setItem('colorPalette2', colorRandons[3].style.background);
};

colorRandons[1].style.background = localStorage.getItem('colorPalette');
colorRandons[2].style.background = localStorage.getItem('colorPalette1');
colorRandons[3].style.background = localStorage.getItem('colorPalette2');

let pixelsDimension = 5;

buttonBoardSize.addEventListener('click', () => {
  pixelBoard.innerHTML = '';
  pixelsDimension = inputBoardSize.value;
  pixelBoard.style.gridTemplateColumns = `repeat(${pixelsDimension}, 40px)`;
  console.log(pixelsDimension);
  addPixelsDivs();
});

const addPixelsDivs = () => {
  for (let index = 0; index < pixelsDimension * pixelsDimension; index += 1) {
    const addDivs = document.createElement('div');
    addDivs.className = 'pixel';
    pixelBoard.appendChild(addDivs);
  }
};

addPixelsDivs();

for (let index = 0; index < colorRandons.length; index += 1) {
  colorRandons[index].addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

const pixel = document.querySelectorAll('.pixel');

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].style.background = localStorage.getItem(`pixel-${index}`);
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    if (selected) {
      pixel[index].style.background = selected.style.background;
      localStorage.setItem(`pixel-${index}`, selected.style.background);
    }
  });
}

const clearPixelBoard = document.getElementById('clear-board');
clearPixelBoard.addEventListener('click', () => {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.background = 'white';
    localStorage.setItem(`pixel-${index}`, 'white');
  }
});

buttonRandomColor.addEventListener('click', colorsRandom);
