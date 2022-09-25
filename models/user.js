module.exports = class User {

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    };

    get id() {
        return this.id;
    };
    set id(value) {
        this.id = value;
    };
    get username() {
        return this.username;
    };
    set username(value) {
        this.username = value;
    };   
    get email() {
        return this.email;
    }
    set email(value) {
        this.email = value;
    }
    get password() {
        return this.password;
    };
    set password(value) {
        this.password = value;
    };   
    get score() {
        return this.score;
    };
    set score(value) {
        this.score = value;
    };
    get role() {
        return this.role;
    };
    set role(value) {
        this.role = value;
    };
    isAdmin() {
        this.role === "ADMIN" ? true : false;
    };
}