function ObserverList() {
    this.list = [];
}

ObserverList.prototype.append = function (observer) {
    this.list.push(observer);
};

ObserverList.prototype.indexOf = function (observer) {
    for (var i = 0; i < this.count(); ++i) {
        if (this.list[i] === observer)
            return i;
    }
    return -1;
};

ObserverList.prototype.get = function (index) {
    return this.list[index];
};

ObserverList.prototype.removeAt = function (index) {
    this.list.splice(index, 1);
};

ObserverList.prototype.count = function () {
    return this.list.length;
};