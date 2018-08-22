var basketModule = (function () {

    // privates

    var basket = [];

    function doSomethingPrivate() {
        //...
    }

    function doSomethingElsePrivate() {
        //...
    }

    return {
        addItem: function( values ) {
            basket.push(values);
        },

        getItemCount: function () {
            return basket.length;
        },

        doSomething: doSomethingPrivate,

        getTotal: function () {

            var q = this.getItemCount(),
                p = 0;

            while (q--) {
                p += basket[q].price;
            }

            return p;
        }
    };
})();

basketModule.addItem({
    item: "bread",
    price: 0.5
});

basketModule.addItem({
    item: "butter",
    price: 0.3
});

// Outputs: 2
console.log( basketModule.getItemCount() );

// Outputs: 0.8
console.log( basketModule.getTotal() );

// Outputs: undefined
console.log( basketModule.basket );