const requestLogs = (req, res, next) => {
  console.log(`Mengambil request ke PATH: ${req.path}`);
  next();
};

module.exports = requestLogs;