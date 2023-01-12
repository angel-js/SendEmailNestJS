import { Module } from '@nestjs/common';
import { EmailModule } from './email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import * as dotenv from 'dotenv';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
dotenv.config();

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
          user: process.env.DB_USER,
          // This password is the password to divice you can activate in Gmail > Setting > Security
          pass: process.env.DB_PASS,
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
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
