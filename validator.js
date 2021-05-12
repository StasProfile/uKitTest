const inputArea = document.getElementById('input-area');
const ceiling = document.getElementById('ceiling');

function validateInputArea(ceiling) {
    let number = Number(inputArea.value);

    if (Number.isNaN(number)) {
        inputArea.value = '';
    }

    if (inputArea.value.startsWith('00')) {
        const i = 1;
        while (inputArea.value[i] === '0') {
            inputArea.value = inputArea.value.substr(1, inputArea.value.length);
            if (inputArea.value === '0') {
                break;
            }
        }
        if (inputArea.value[0] === '0' && inputArea.value[1] !== '.') {
            inputArea.value = inputArea.value.substr(1, inputArea.value.length);
        }
    }

    if (Math.round(number * 100) !== number * 100) {
        console.log(inputArea.value.slice(0, inputArea.value.indexOf('.') + 3));
        inputArea.value = inputArea.value.slice(0, inputArea.value.indexOf('.') + 3);
    }

    number = Number(inputArea.value);
    if (number > ceiling) {
        inputArea.value = ceiling
    }

    if (inputArea.value.indexOf('.') !== (inputArea.value.length - 2) && inputArea.value.endsWith('0')) {
        inputArea.value = number;
    }
} 

inputArea.addEventListener('input', () => {
    validateInputArea(ceiling.value || 100);
})