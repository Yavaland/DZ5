const textInput = document.getElementById("textInput");
const resultDiv = document.getElementById("result");

textInput.addEventListener("input", function () {
  const text = textInput.value.toLowerCase();
  let vowelCount = 0;
  let characterCount = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (isVowel(char)) {
      vowelCount++;
    }
    characterCount++;
  }

  const color = vowelCount > 4 ? "red" : "blue";

  resultDiv.innerHTML = `
    <p>Введенное слово: ${text}</p>
    <p>Количество символов: ${characterCount}</p>
    <p style="color: ${color}">Количество гласных: ${vowelCount}</>
  `;
});

function isVowel(char) {
  return ["a", "e", "i", "o", "u"].includes(char);
}
