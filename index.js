/**
 *
 * @param age {number} - age of user
 * @returns {boolean}
 */
function isAdult(age) {
    return age >= 18;
}


/**
 *
 * @param a {number} - first number
 * @param b {number} - second number
 * @returns {boolean}
 */
function checkMultiplicity(a , b) {
    return a % b === 0;
}


/**
 *
 * @param a {number} - side of the triangle A
 * @param b {number} - side of the triangle B
 * @param c {number} - side of the triangle C
 * @returns {boolean}
 */
function checkTriangle(a , b, c) {
    return a + b > c && a + c > b && b + c > a ;
}