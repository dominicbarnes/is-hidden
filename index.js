
/**
 * Tests for if the input element is hidden (taken from jQuery)
 *
 * TODO: test for other scenarios, like visibility: hidden;
 *
 * @param {HTMLElement} el
 */

module.exports = function (el) {
    return el.offsetHeight <= 0 && el.offsetWidth <= 0;
}
