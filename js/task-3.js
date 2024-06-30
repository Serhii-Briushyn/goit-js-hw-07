document.querySelector("#name-input").addEventListener("input", function () {
  const input = document.querySelector("#name-input");
  const output = document.querySelector("#name-output");
  const trimmedValue = input.value.trim();
  output.textContent = trimmedValue ? trimmedValue : "Anonymous";
});
