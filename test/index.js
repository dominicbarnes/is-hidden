var assert = require("assert");
var hidden = require("is-hidden");

describe("hidden(el)", function () {
    it("should be false for normal elements", function () {
        assert(!hidden(element()));
    });

    it("should be true for detached elements", function () {
        var el = document.createElement("div");
        assert(hidden(el));
    });

    it("should be true for elements with display: none;", function () {
        var el = element();
        el.style.display = "none";
        assert(hidden(el));
    });
});

function element() {
    var el = document.createElement("div");
    el.innerHTML = "<p>This is a test</p>";
    document.body.appendChild(el);
    return el;
}
