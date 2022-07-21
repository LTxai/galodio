import nodemailer from "nodemailer";
import dotenv from "dotenv";


dotenv.config();
const transporter = nodemailer.createTransport({
  host: "smtp.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
  tls: { ciphers: "SSLv3" },
});

export default transporter;
