function shuffleValues() {
  const checkboxContainer = document.getElementById("checkboxContainer");
  const labels = Array.from(checkboxContainer.querySelectorAll("label"));

  for (let i = labels.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [labels[i], labels[j]] = [labels[j], labels[i]];
  }

  checkboxContainer.innerHTML = "";

  labels.forEach((label) => {
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
  });
}

function changeValues() {
  const checkboxContainer = document.getElementById("checkboxContainer");
  checkboxContainer.innerHTML = "";

  for (let i = 1; i <= 4; i++) {
    const newValue = "New Value " + i;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    checkbox.value = newValue;

    const label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(newValue));

    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(document.createElement("br"));
  }
}

function showSelectedValues() {
  const checkboxes = document.getElementsByName("checkbox");
  const selectedValuesDiv = document.getElementById("selectedValues");
  let selectedValues = "";
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedValues += checkboxes[i].value + "<br>";
    }
  }
  selectedValuesDiv.innerHTML = selectedValues;
}
