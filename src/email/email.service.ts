import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';
//import nodemailer from 'nodemailer';
//import { main } from './enviarMail';
//import { CreateEmailDto } from './dto/create-email.dto';
//import { UpdateEmailDto } from './dto/update-email.dto';
import { CreateEmailDto } from './dto';
import { BadRequestException } from '@nestjs/common/exceptions';

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

  async sendMail(createEmailDto: CreateEmailDto) {
    createEmailDto.toemail = createEmailDto.toemail.toLowerCase();
    console.log('Entro en la funcion');
    try {
      await this.mailService.sendMail({
        to: createEmailDto.toemail,
        from: 'emailparaejerciciodenestprueba@gmail.com',
        subject: createEmailDto.sub,
        text: createEmailDto.message,
      });
      console.log('Yujuuuu');
      return `The Message has been send successfully`;
    } catch (error) {
      console.log('Sadness');
      console.log(error);
      throw new BadRequestException(
        `This message cannot send, please check out de server logs`,
      );
    }
  }
}
