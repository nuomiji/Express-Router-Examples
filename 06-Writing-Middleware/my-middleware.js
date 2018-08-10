module.exports = (options) => {
  return (req, res, next) => {
    // Implement the middleware function based on the options object
    console.log("Option1: ", options.option1, "Option2: ", options.option2);
    next();
  }
}
