import { Injectable } from '@nestjs/common';
//import nodemailer from 'nodemailer';
//import { main } from './enviarMail';
//import { CreateEmailDto } from './dto/create-email.dto';
//import { UpdateEmailDto } from './dto/update-email.dto';

@Injectable()
export class EmailService {
  async sendEmail() {
    return `This action returns all Emails`;
  }
}
