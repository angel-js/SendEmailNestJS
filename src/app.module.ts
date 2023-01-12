import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    EmailModule,
    // Define MailerModule atribute with Host, Port, User and Password
    MailerModule.forRoot({
      transport: {
        // This is the host to use in my case (GMAIL)
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          // The user is the email that you use it
          user: 'emailparaejerciciodenestprueba@gmail.com',
          // This password is the password to divice you can activate in Gmail > Setting > Security
          pass: 'hkaivpnfwykpafxf',
        },
      },
      // This code is if you want to use Ethereal Email
      /* transport: {
        host: 'smtp.ethereal.email',
        auth: {
          user: 'german.bins44@ethereal.email',
          pass: 'RbXVaGzXFURjKbJHTK',
        },
      }, */
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
