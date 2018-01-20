// Generator 与状态机 § ⇧
var clock = function*() {
    while (true) {
        console.log('Tick!');
        yield;
        console.log('Tock!');
        yield;
    }
};