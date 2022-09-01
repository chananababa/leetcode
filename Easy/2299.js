/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
    const check8 = (password) => {
        return password.length >= 8
    }
    const checkCond = (password, cond) => {
        return password.split('').reduce((result, c) => {
            if (result) return result;
            return cond(c);
        }, false);
    }
    const cond1 = (c) => {
        if (cond3(c)) return false;
        if (cond4(c)) return false;
        return c === c.toLowerCase();
    }
    const cond2 = (c) => {
        if (cond3(c)) return false;
        if (cond4(c)) return false;
        return c === c.toUpperCase();
    }
    const cond3 = (c) => !isNaN(c)
    const cond4 = (c) => '!@#$%^&*()-+'.includes(c)
    
    const checkNoAdjacent = (password) => {
        return password.split('').reduce((result, c, i) => {
            if (!result) return result;
            if (i === password.length - 1) return true;
            if (password[i] === password[i+1]) return false;
            return true;
        }, true)
    }
    return check8(password) && checkCond(password, cond1) && checkCond(password, cond2) && checkCond(password, cond3) && checkCond(password, cond4) && checkNoAdjacent(password)
};
