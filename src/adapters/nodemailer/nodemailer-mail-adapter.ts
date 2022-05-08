import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1d8fb530e556e7",
    pass: "6484565fd01f7b"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedfet.com>',
      to: 'Felipe Oliveira <felipe.shinigamix@gmail.com>',
      subject,
      html: body,
    }) 
  };
}