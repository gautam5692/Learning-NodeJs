const errController = (req, res, next) => {
  res
    .status(404)
    .render("error_page/404", {pageTitle: "Page Not Found"});
}

module.exports = errController