module.exports = () => (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000/");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, HEAD,PUT, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Authorization"
  );
};
