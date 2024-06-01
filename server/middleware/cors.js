module.exports = () => (req, res, next) => {
  const allowedOrigins = ["http://127.0.0.1:5173", "https://pricetracker-ak2h.onrender.com"];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, HEAD,PUT, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Authorization"
  );
  next();
};
