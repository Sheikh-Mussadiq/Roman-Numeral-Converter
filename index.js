const form = document.getElementById('form');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToRoman = (num) => {
    const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
    ];
    const res = [];

    ref.forEach(function (arr) {
        while (num >= arr[1]) {
            res.push(arr[0]);
            num -= arr[1];
        }
        
    });
    return res.join('');
}
const isValid = (num, str) => {
    let errText = '';

    if (!str || str.match(/[e.]/gi)) {
        errText = 'Please enter a valid number';
    } else if (str < 1) {
        errText = 'Please enter a number greater than or equal to 1.';
    } else if (str > 3999) {
        errText = 'Please enter a number less than or equal to 3999.'

    } else {
    return true;
    }

    output.innerText = errText;
    output.classList.add('alert');

    return false;
};
convertBtn.addEventListener('click', () => {
    updateUI();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateUI()
});

const clearOutput = () => {
    output.textContent = '';
    output.classList.remove('alert');
}
const updateUI = () => {
    const numStr = document.getElementById('number').value;
    const int = parseInt(numStr, 10);

    output.classList.remove('hidden');
    clearOutput();

    if (isValid(int, numStr)) {
        output.innerText = convertToRoman(int);
    }
};

