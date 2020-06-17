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


/**
 *
 * @param a {number} - side of the rhombus A
 * @param h {number} - height of the rhombus which is lowered to the side A
 * @returns {number}
 */
function areaOfRhombus(a, h) {
    return a * h;

}


/**
 *
 * @param r {number} - radius  of the cylinder r
 * @param h {number} - height of the cylinder h
 * @returns {number}
 */
function areaOfCylinder(r, h) {
    return (2*3.14*(r*r))+(2*3.14*r*h);


}

/**
 *
 * @param a {number} - side of the triangle A
 * @param h {number} - height of the triangle which is lowered to the side A
 * @returns {number}
 */
function areaOfTriangle(a, h) {
    return 1 / 2 * a * h;

}

/**
 *
 * @param a {number} - side of the rectangle A
 * @param b {number} - side of the rectangle B
 * @returns {number}
 */
function areaOfRectangle(a, b) {
    return a * b;

}