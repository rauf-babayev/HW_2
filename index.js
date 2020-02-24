// Homework 2

// 1

const drawSquare = num => {
    let str = '';

    for (let row = 0; row < num; row++) {
        for (let column = 0; column < num; column++) {
            str += ' *';
        }
        str += '\n';
    }

    return str;
};

console.log(drawSquare(6));

// 2

const drawEmptySquare = num => {
    let str = '';

    for (let row = 0; row < num; row++) {
        for (let column = 0; column < num; column++) {
            if (row === 0 || (row === num - 1) || column === 0 || (column === num - 1)) {
                str += ' *';
            } else str += '  ';
        }
        str += '\n';
    }

    return str;
};

console.log(drawEmptySquare(6));

// 3

const drawTriangle = num => {
    let str = '';

    for (let row = 0; row < num; row++) {
        for (let column = 0; column < num; column++) {
            if (row + column < num) {
                str += '*';
            }
        }
        str += '\n';
    }

    return str;
};

console.log(drawTriangle(8));

// 4

const drawEmptyTriangle = num => {
    let str = '';

    for (let row = 0; row < num; row++) {
        for (let column = 0; column < num; column++) {
            if (row === 0 || column === 0 || (row + 1 === num - column)) {
                str += '*';
            } else str += ' ';
        }
        str += '\n';
    }

    return str;
};

console.log(drawEmptyTriangle(9));
    
// 5

const drawHourglass = num => {
    let str = '';

    for (let row = 0; row < num; row++) {
        for (let column = 0; column < num; column++) {
            if (row === column || (row + column === num - 1) || row < column && (row < num - column) || row > column && (row >= num - column)) {
                str += '*';
            } else str += ' ';
        }
        str += '\n';
    }

    return str;
};

console.log(drawHourglass(9));

// 6

const drawEmptyHourglass = num => {
    let str = '';

    for (let row = 0; row < num; row++) {
        for (let column = 0;column < num; column++) {
            if (row === 0 || (row === num - column -1) || (row === column) || (row === num - 1)) {
                str += '*';
            }  else str += ' ';
        }
        str += '\n';
    }

    return str;
};

console.log(drawEmptyHourglass(9));



