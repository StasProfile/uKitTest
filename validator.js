const inputArea = document.getElementById('input-area');
const ceiling = document.getElementById('ceiling');

function validateInputArea(ceiling){
    const number = Number(inputArea.value);
    if (number > ceiling) {
        inputArea.value = ceiling;
    }
    // if (inputArea.value[inputArea.length - 1] !== '.') {
    //     var i = 0;
    //     str = inputArea.value;
    //     console.log(isNaN(str));
    //     while (isNaN(str)) {
    //         if (isNaN(str[i] && str[i] !== '.')) {
    //             str = str.slice(0, str.indexOf(str[i]))
    //             .concat(str.slice(str.indexOf(str[i]) + 1, str.length));
    //         }
    //         i += 1;
    //     }
    //     inputArea.value = str;
    // }
    
    if (inputArea.value.indexOf('.') !== inputArea.value.lastIndexOf('.')) {
        const str = inputArea.value
        const indexOf = str.lastIndexOf('.')
        inputArea.value = str.slice(0, indexOf)
        .concat(str.slice(indexOf + 1, str.length));  
    }
    
    if (Number.isNaN(number)) {
        str = inputArea.value;
        for (const c of str){
            if (c === '.') {
                continue;
            }
            const digit = Number(c);
            if (Number.isNaN(digit)) {
                inputArea.value = str.slice(0, str.indexOf(c))
                .concat(str.slice(str.indexOf(c) + 1, str.length));
                console.log(inputArea.value)
            }
        }
        if (isNaN(inputArea.value)) {
            inputArea.value = '';
        }
    }

    if ((inputArea.value.indexOf('0') === 0 && inputArea.value.indexOf('.') !== 1) && inputArea.value.indexOf('.') !== -1){
        inputArea.value = inputArea.value.slice(1, inputArea.length)
    }
    
    while (inputArea.value.startsWith('00')) {
            inputArea.value = inputArea.value.slice(1, inputArea.length)
    }

    if (inputArea.value[0] == '.') {
        inputArea.value = '';
    }

    if (Math.round(number * 100) !== number * 100) {
        inputArea.value = inputArea.value.slice(0, inputArea.value.indexOf('.') + 3);
    }
}

inputArea.addEventListener('input', () => {
    if (ceiling.value === ''){
        ceiling.value = 100;
    }
    validateInputArea(ceiling.value);
})