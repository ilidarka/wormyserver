exports.index = (req, res) => {
    res.render('main.hbs');
};
exports.registration = (req, res) => {
    res.render('registration.hbs');
};
exports.signIn = (req, res) => {
    res.render('signin.hbs');
}