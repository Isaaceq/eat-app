function login(req, res, next) {
  res.json({message: "Auth Login Route"})
  next()
}

function register(req, res, next) {
  res.json({message: "Auth Logout Route"})
  next()
}

function verify(req, res, next) {
  res.json({message: "Auth Logout Route"})
  next()
}

function verifyAdmin(req, res, next) {
  res.json({message: "Auth Logout Route"})
  next()
}

module.exports = {
  login: login,
  register: register,
  verify: verify,
	verifyAdmin: verifyAdmin
}
