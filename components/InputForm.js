export function InputForm(fields) {
    const form = document.createElement('form');

    fields.forEach(field => {
        const wrapper = document.createElement('div');
        const label = document.createElement('label');
        label.textContent = field.label;
        const input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;
        wrapper.appendChild(label);
        wrapper.appendChild(input);
        form.appendChild(wrapper);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Login';
    form.appendChild(submitButton);

    return form;
}