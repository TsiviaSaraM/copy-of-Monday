export const utilService = {
    loadFromStorage,
    saveToStorage,
    makeName,
    makeId
}


//the id for tasks and groups may not contain the * char
export function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function makeName(length = 5) {
    var text = "";
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var lower = 'abcdefghijklmnopqrstuvwxyz'
    text += upper.charAt(Math.floor(Math.random() * upper.length));
    for (var i = 0; i < length - 1; i++) {
        text += lower.charAt(Math.floor(Math.random() * lower.length));
    }
    return text;
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return (val)? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
    localStorage[key] = JSON.stringify(val);
}