var fatorial = (function() {
    var cached = {};

    function factorial(x) {
        if (x < 2) {
            return 1;
        }
        if (!(x in cached)) {
            cached[x] = x * factorial(x - 1);
        }
        return cached[x];
    }
    console.log(cached)
    return factorial;
})();

alert(fatorial(6))


let sum = function() {
    function sum(a, b) {
        console.log(a + b);
    }
    return sum;
}();

console.log(sum(1, 7));


(function a() {
    function sum(a, b) {
        console.log(a + b);
    }
    return sum;
})();