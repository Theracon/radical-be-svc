"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = void 0;
const shuffle = (array) => {
    const newArr = [...array];
    let currentIndex = newArr.length;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newArr[currentIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[currentIndex]];
    }
    return newArr;
};
exports.shuffle = shuffle;
