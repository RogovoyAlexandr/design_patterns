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

//Subject-----------------------------------

function Subject() {
    this.observerList = new ObserverList();
}

Subject.prototype.append = function (observer) {
    this.observerList.append(observer);
};

Subject.prototype.remove = function (observer) {
    this.observerList.removeAt(this.observerList.indexOf(observer));
};

Subject.prototype.notify = function (context) {
    for (var i = 0; i < this.observerList.count(); ++i) {
      this.observerList.get(i).update(context);
    }
};

//Observer-----------------------------------
function Observer() {
    this.update = function (context) {

    }
}