import { createTransport } from "nodemailer";
import { GMAIL_EMAIL, GMAIL_APP_PASSWORD } from "../config";

export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_APP_PASSWORD,
  },
});
