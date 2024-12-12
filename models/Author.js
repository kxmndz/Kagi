module.exports = class Author {
    _id;
    _name;
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    asLink() {
        return `<a href="/app/author/${this._id}">${this._id}</a>`;
    }

    asInfoPage() {
        return `<h2>Author ID: ${this._id}</h2>`
        + `<h2>Name: ${this._name}</h2>`
        + '<h3>Books: </h3>';
    }
}