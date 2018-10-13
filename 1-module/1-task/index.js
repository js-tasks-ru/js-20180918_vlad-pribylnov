/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    let x = m;

    for (n;n > 1;n--) {
        m *= x;
    }

    return m;
}