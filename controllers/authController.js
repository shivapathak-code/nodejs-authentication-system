const User = require("../models/User");
const Otp = require("../models/Otp");
const generateToken = require("../utils/generateToken");
const sendOtpEmail =
require("../services/emailService");
// Register
const register = async (req, res) => {
try {
const { name, email, password } = req.body;

if (!name || !email || !password) {
  return res.status(400).json({
    message: "All fields are required",
  });
}

const existingUser = await User.findOne({ email });

if (existingUser) {
  return res.status(400).json({
    message: "User already exists",
  });
}

const user = await User.create({
  name,
  email,
  password,
});

const otp = Math.floor(
  100000 + Math.random() * 900000
).toString();

await Otp.deleteMany({
  user: user._id,
});

await Otp.create({
  user: user._id,
  otp,
  expiresAt: new Date(Date.now() + 5 * 60 * 1000),
});

await sendOtpEmail(
  user.email,
  otp
);

res.status(201).json({
  message: "User registered successfully. Verify OTP.",
});


} catch (error) {
res.status(500).json({
message: error.message,
});
}
};

// Verify Email OTP
const verifyOtp = async (req, res) => {
try {
const { email, otp } = req.body;


const user = await User.findOne({ email });

if (!user) {
  return res.status(404).json({
    message: "User not found",
  });
}

const savedOtp = await Otp.findOne({
  user: user._id,
});

if (!savedOtp) {
  return res.status(400).json({
    message: "OTP not found",
  });
}

if (savedOtp.expiresAt.getTime() < Date.now()) {
  return res.status(400).json({
    message: "OTP expired",
  });
}

if (savedOtp.otp !== otp) {
  return res.status(400).json({
    message: "Invalid OTP",
  });
}

user.isVerified = true;
await user.save();

await Otp.deleteOne({
  _id: savedOtp._id,
});

res.status(200).json({
  message: "Email verified successfully",
});


} catch (error) {
res.status(500).json({
message: error.message,
});
}
};

// Login
const login = async (req, res) => {
try {
const { email, password } = req.body;


const user = await User.findOne({ email });

if (!user) {
  return res.status(404).json({
    message: "User not found",
  });
}

const isMatch = await user.matchPassword(password);

if (!isMatch) {
  return res.status(400).json({
    message: "Invalid credentials",
  });
}

if (!user.isVerified) {
  return res.status(400).json({
    message: "Please verify email first",
  });
}

const otp = Math.floor(
  100000 + Math.random() * 900000
).toString();

await Otp.deleteMany({
  user: user._id,
});

await Otp.create({
  user: user._id,
  otp,
  expiresAt: new Date(Date.now() + 5 * 60 * 1000),
});

await sendOtpEmail(
  user.email,
  otp
);

res.status(200).json({
  message: "OTP sent for login",
});


} catch (error) {
res.status(500).json({
message: error.message,
});
}
};

// Verify Login OTP
const verifyLoginOtp = async (req, res) => {
try {
const { email, otp } = req.body;


const user = await User.findOne({ email });

if (!user) {
  return res.status(404).json({
    message: "User not found",
  });
}

const savedOtp = await Otp.findOne({
  user: user._id,
});

if (!savedOtp) {
  return res.status(400).json({
    message: "OTP not found",
  });
}

if (savedOtp.expiresAt.getTime() < Date.now()) {
  return res.status(400).json({
    message: "OTP expired",
  });
}

if (savedOtp.otp !== otp) {
  return res.status(400).json({
    message: "Invalid OTP",
  });
}

await Otp.deleteOne({
  _id: savedOtp._id,
});

const token = generateToken(user._id);

res.status(200).json({
  message: "Login successful",
  token,
});


} catch (error) {
res.status(500).json({
message: error.message,
});
}
};
const getProfile = async (req, res) => {
  res.status(200).json(req.user);
};

module.exports = {
register,
verifyOtp,
login,
verifyLoginOtp,
getProfile
};
