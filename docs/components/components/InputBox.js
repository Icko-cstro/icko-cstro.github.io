// components/InputBox.js
export function InputBox(labelText, inputType) {
    const wrapper = document.createElement('div');
    const label = document.createElement('label');
    label.textContent = labelText;
    const input = document.createElement('input');
    input.type = inputType;
    input.name = labelText.toLowerCase();
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    return wrapper;
  }