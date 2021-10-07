
const cats = ["Milo", "Otis","Garfield"];
const newcat = "Ralph"
function destructivelyAppendCat(newcat){
    cats.push(newcat);
}
function destructivelyPrependCat(newcat){
    cats.unshift(newcat);
}
function destructivelyRemoveLastCat(newcat){
    cats.pop(3);
}
function destructivelyRemoveFirstCat(newcat){
    cats.shift(0);
}
function appendCat(){
    const copyCats = [...cats,"Broom"];
    return copyCats;
}
function prependCat(){
    const copyCats = ["Arnold",...cats];
    return copyCats;
}
function removeLastCat(){
    const copyCats = cats.slice(0,-1);
    return copyCats;
}
function removeFirstCat(){
    const copyCats = cats.slice(1);
    return copyCats;
}