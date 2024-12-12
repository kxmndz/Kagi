class Book {
    _id;
    _origTitle;
    _localTitle;
    _author;
    _publishDate;
    _ageRange;
    _status;
    _synopsis;

    constructor(id, origTitle, localTitle, author, publishDate, status, ageRange, synopsis) {
        this._id = id;
        this._origTitle = origTitle;
        this._localTitle = localTitle;
        this._author = author;
        this._publishDate = publishDate;
        this._ageRange = ageRange;
        this._status = status;
        this._synopsis = synopsis;
    }

    asHtmlRow() {
        return "<tr>"
            + "<td>" + this.asLink() + "</td>"
            + "<td>" + this._origTitle + "</td>"
            + "<td>" + this._localTitle + "</td>"
            + "<td>" + `<a href="/app/author/${this._author}">${this._author}</a>` + "</td>"
            + "<td>" + this._publishDate + "</td>"
            + "<td>" + this._status + "</td>"
            + "<td>" + this._ageRange + "</td>"
            + "</tr>";
    }

    asInfoPage() {
        let out = "";
        out += "<h2>" + this._origTitle + "</h2>";
        out += "Cover (placeholder)<img style=\"width=160px;height=90px;border:1px solid white;\"></img>";
        out += "<h4>Also known as: " + this._localTitle + "</h2>";
        out += `<div><h3>Author: </h3><span>` + this.authorLink() +'</span>';
        out += "<div><h3>Publish Date: </h3><span>" + this._publishDate + "</span>";
        out += "<div><h3>Age Rating: </h3><span>" + this._ageRange + "</span>";
        out += "<div><h3>Status: </h3><span>" + this._status + "</span>";
        out += "<div><h3>Synopsis: </h3><span>" + this._synopsis + "</span>";

        return out;
    }

    asLink() {
        return `<a href='/app/book/${this._id}'>${this._id}</a>`;
    }

    authorLink() {
        return `<a href="/app/author/${this._author}">${this._author}</a>`;
    }
}

module.exports = Book;