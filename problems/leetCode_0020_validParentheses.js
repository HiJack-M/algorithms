/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length == 0) {
        return false;
    }
    if (s.length % 2 == 1) {
        return false;
    }
    let stack = [];
    let charMap = new Map();
    charMap.set('(', ')');
    charMap.set('{', '}');
    charMap.set('[', ']');

    for (let i = 0; i < s.length; i++) {
        if (charMap.has(s[i])) {
            stack.push(s[i]);
        } else {
            if (i === 0) {
                return false;
            }
            let matchChar = stack.pop();
            if (charMap.get(matchChar) !== s[i]) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};
