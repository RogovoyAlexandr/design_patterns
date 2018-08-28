const Settings = (function () {
    let _instance;

    function InstanceSingleton({width, height, color} = {}) {
        this._width = width;
        this._height = height;
        this._color = color;

        console.log(this._width, this._height, this._color);

        this._random = Math.random();
    }

    InstanceSingleton.prototype.getRandom = function () {
        return this._random;
    };

    return {
        /**
         * @param {object} options
         * @return {InstanceSingleton}
         */
        getInstance: (options = {}) => {
            if (!_instance)
                _instance = new InstanceSingleton(options);
            return _instance;
        }
    }
})();

let options = {
    width: 10,
    height: 25,
    color: 'red'
};

const settingsA = Settings.getInstance(options);
const settingsB = Settings.getInstance(options);

console.log(settingsA.getRandom() === settingsB.getRandom()); // true