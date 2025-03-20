import { AwsSESClientBuilder } from "@adameds/email-sender-ses/builders";
import { EmailSenderSESService } from "@adameds/email-sender-ses/services";
import "dotenv/config";

// import { createTransport } from "nodemailer";

// const transport = createTransport({
//   host: process.env.AWS_SES_HOST,
//   port: process.env.AWS_SES_PORT,
//   secure: process.env.AWS_SES_SECURE === "true"? true : false,
//   auth: {
//     user: process.env.AWS_SES_USERNAME,
//     pass: process.env.AWS_SES_PASSWORD,
//   },
// });

// const mailOptions = {
//   from: "engineer@adamlabs.id",
//   to: "allianoanonymous@gmail.com",
//   subject: "Test Email AWS SES SMTP",
//   text: "Hello, this is a test email sent using AWS SES SMTP.",
// };

// transport.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.log("Error: ", error);
//   } else {
//     console.log("Email sent: ", info.response);
//   }
// });

const builder = new AwsSESClientBuilder()
    .setAccessKeyId(process.env.AWS_SDK_ACCESS_KEY_ID)
    .setSecretAccessKey(process.env.AWS_SDK_SECREET_ACCESS_KEY)
    .setRegion(process.env.AWS_REGION)
    .build();
const emailSenderService = new EmailSenderSESService(builder);

emailSenderService.sendOtpUseEmail("allianoanonymous@gmail.com", "Verifikasi OTP", "123456").then((result) => console.log(result)).catch((error) => console.log(error));
