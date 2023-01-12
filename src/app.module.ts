import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    EmailModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'emailparaejerciciodenestprueba@gmail.com',
          pass: 'hkaivpnfwykpafxf',
        },
      },
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
