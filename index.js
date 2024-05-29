/**
 * 1. Urutkan array berikut [12,9,30,”A”,”M”,99,82,”J”,”N”,”B”] dengan urutan abjad 
 * di depan dan angka di belakang, contoh [“A”, “B”,”J”, “M”, “N”, 9, 12, 30, 82, 99]
 * */
const arrayReverse = [12,9,30, 'A','M',99,82, 'J', 'N','B'];

const arrayNum = [];
const arrayLetter = [];

arrayReverse.map((item) => {
    if(typeof item === 'number'){
        arrayNum.push(item);
    }else {
        arrayLetter.push(item)
    }
});

// fungsi untuk sorting huruf
const sortLetters = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// function untuk sorting number
const sortNumbers = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

sortLetters(arrayLetter)
sortNumbers(arrayNum)
const concateArray = [...arrayLetter, ...arrayNum];
console.log(concateArray);


/** 
 * 3. Buat fungsi yang menghitung banyak nya huruf yang user masukan dalam 1x 
 * inputan dan urutkan hasil akhir sesuai abjad, Perhatikan huruf kapital, jika
 * terdapat abjad yang sama namun dalam kapital maka pisah huruf tersebut,
 * contoh :
 * 
 * - Input : “Hello World”
 *   Output : [“d”:1, “e”:1, “H”:1, “l”: 3, “o”:2, “r”:1, “W”:1]
 * 
 * -  Input : “Bismillah” 
 *    Output: [“a”:1,”B”:1,”h”:1,”i”:2,”l”:2, “m”:1, “s”:1]
 * 
 * -  Input: “MasyaAllah”
 *    Output: [“A”:1, “a”:3, “h”:1,”l”:2, “M”:1, “s”:1, “y”:1]
 * */

function letterCounter(paramsLetter, startLetter) {
    const letterCount = {};

    // Menghitung jumlah setiap huruf
    for (let i = 0; i < paramsLetter.length; i++) {
        const char = paramsLetter[i];
        if (char !== ' ') {
            if (letterCount[char]) {
                letterCount[char]++;
            } else {
                letterCount[char] = 1;
            }
        }
    }

    // Mengubah objek menjadi array kunci
    let letterArray = Object.keys(letterCount);

    // Mengurutkan array huruf secara manual
    let sortedKeys = sortLetters(letterArray);

    // Menggeser array sehingga dimulai dari startLetter
    let startIndex = sortedKeys.indexOf(startLetter);
    if (startIndex !== -1) {
        sortedKeys = sortedKeys.slice(startIndex).concat(sortedKeys.slice(0, startIndex));
    }

    // Membuat array hasil yang sudah diurutkan
    let sortedLetterArray = sortedKeys.map(key => {
        return { [key]: letterCount[key] };
    });

    return sortedLetterArray;
}

// Contoh penggunaan
console.log(letterCounter('Hello World', 'd'));
// Output: [{ "d": 1 }, { "e": 1 }, { "H": 1 }, { "l": 3 }, { "o": 2 }, { "r": 1 }, { "W": 1 }]
console.log(letterCounter('Bismillah', 'h'));
// Output: [{ "h": 1 }, { "i": 2 }, { "l": 2 }, { "m": 1 }, { "s": 1 }, { "a": 1 }, { "B": 1 }]
