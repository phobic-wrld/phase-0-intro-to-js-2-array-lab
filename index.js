// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendcat(name) {
    return {...cats, name};
}

function prependCat(name) {
    return {name, ...cats};
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}

module.export = { cats, destructivelyPrependCat, destructivelyRemoveLastCat, destructivelyRemoveFirstCat, appendcat, prependCat, removeLastCat, removeFirstCat };
function destructivelyAppendCat(name) {
    cats.push(name);
}

module.exports ={ cats, destructivelyAppendCat};