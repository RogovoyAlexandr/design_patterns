(function () {
    var _pubsub = {},
        topics = [],
        uid = -1;


    _pubsub.publish = function (event, args) {
        if (!topics[event])
            return false;

        setTimeout(function () {
            var subscribers = topics[event],
                len = subscribers ? subscribers.length : 0;

            while (len--)
                subscribers[len].func(event, args)
        });

        return true;
    };

    _pubsub.subscribe = function (event, func) {
        if (!topics[event])
            topics[event] = [];

        var token = ++uid;

        topics[event].push({
            token: token,
            func: func
        });

        return token;
    };

    _pubsub.unsubscribe = function (event, token) {
        if (!topics[event])
            return false;

        for (var i = 0; i < topics[event].length; ++i) {
            if (topics[event][i].token === token) {
                topics[event].splice(i, 1);
                return token;
            }
        }

        return false;

    };

    function getPubSub() {
        return _pubsub;
    }

    window.pubsub = getPubSub();

})();
