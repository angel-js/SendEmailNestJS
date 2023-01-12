import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';
//import nodemailer from 'nodemailer';
//import { main } from './enviarMail';
//import { CreateEmailDto } from './dto/create-email.dto';
//import { UpdateEmailDto } from './dto/update-email.dto';

@Injectable()
export class EmailService {
  constructor(private readonly mailService: MailerService) {}

  async sendEmail(toemail: string, sub: string, message: string) {
    await this.mailService.sendMail({
      to: toemail,
      from: 'emailparaejerciciodenestprueba@gmail.com',
      subject: sub,
      text: message,
    });
    return `The Message has been send successfully`;
  }
}
