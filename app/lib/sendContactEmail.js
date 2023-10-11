import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { ContactEmail } from '../components/ContactEmail';

async function sendContactEmail(email, name) {
    try {
        // create trasport
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SUBSCRIBE_MAIL,
                pass: process.env.SUBSCRIBE_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
         });

         //email template
         const emailHtml = render(<ContactEmail url="https://reactivo.mx" name={name}/>)
        // options obj
        const mailOptions = {
            from: process.env.SUBSCRIBE_MAIL,
            to: email,
            subject: 'Mensaje recibido',
            html: emailHtml
        }

        // send email
        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.log(err);
    }
}

export default sendContactEmail;