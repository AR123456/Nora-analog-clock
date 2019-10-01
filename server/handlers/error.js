/// error handler will send back JSON or a 500 error - first param is error
// middle ware this will  be used after 404 , something went wrong on the server
// generic funciton that responsds with error, better troubleshooting
// good error handlers help the front end developers so they can see what is going on and know what to expect
function errorHandler(error, request, response, next) {
  return response.status(error.status || 500).json({
    error: {
      message: error.message || "Oops! Something went wrong"
    }
  });
}

module.exports = errorHandler;
