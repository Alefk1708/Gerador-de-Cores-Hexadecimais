const hexadecimalChange = document.getElementById('hexadecimalValue');
const numberContainer = document.getElementById('numberContainer');
const generateColorButton = document.getElementById('generateColor');

function changeHex() {
  const randomInt = Math.floor(Math.random() * 16777216); // 0xFFFFFF + 1
  const hex = '#' + randomInt.toString(16).padStart(6, '0');

  hexadecimalChange.textContent = hex;
  numberContainer.style.backgroundColor = hex;
  document.body.style.backgroundColor = hex;
}

// Evento para gerar nova cor ao clicar no botão
generateColorButton.addEventListener('click', changeHex);

// Evento para copiar o código hexadecimal ao clicar no texto
hexadecimalChange.addEventListener('click', () => {
  navigator.clipboard.writeText(hexadecimalChange.textContent)
    .then(() => alert('Código copiado!'))
    .catch(err => console.error('Erro ao copiar:', err));
});
