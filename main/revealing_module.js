const Counter = (function () {
    let _counter = 0;
    let version = '1.0.0';

    const _increase = () => {
        ++_counter;
    };

    const _currentValue =() => {
        return _counter;
    };

    const increase = () => {
        console.log(`Current value: ${_currentValue()}`);
        _increase();
        console.log(`After increase value: ${_currentValue()}`);
    };

    return {
        increase: increase,
        version: version
    }
})();

Counter.increase();

console.log(Counter.version);