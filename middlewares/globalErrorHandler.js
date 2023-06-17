const globalErrorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message || 'something went wrong. Please try again later',
  });
};

module.exports = {
  globalErrorHandler,
};
