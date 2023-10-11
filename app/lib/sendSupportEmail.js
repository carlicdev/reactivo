import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { SupportEmail } from '../components/SupportEmail';

async function sendSupportEmail(email, name, ticket) {
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
         const emailHtml = render(<SupportEmail url="https://reactivo.mx" name={name} ticket={ticket}/>)
        // options obj
        const mailOptions = {
            from: process.env.SUBSCRIBE_MAIL,
            to: email,
            subject: 'Ticket de Soporte',
            html: emailHtml
        }

        // send email
        await transporter.sendMail(mailOptions);
    } catch (err) {
        console.log(err);
    }
}

export default sendSupportEmail;