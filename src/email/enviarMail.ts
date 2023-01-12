/* import nodemailer from 'nodemailer';

// async..await is not allowed in global scope, must use a wrapper
export async function main() {
  // Generate test SMTP service account from ethereal.email

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'german.bins44@ethereal.email', // generated ethereal user
      pass: 'RbXVaGzXFURjKbJHTK', // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Angel Serrano 👻" <german.bins44@ethereal.email>', // sender address
    to: 'emailparaejerciciodenestprueba@gmail.com, emailparaejerciciodenestprueba@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
 */
