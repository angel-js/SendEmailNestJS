import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';
import { CreateEmailDto } from './dto';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class EmailService {
  // To create an instance of MailerService Class
  constructor(private readonly mailService: MailerService) {}

  // Async Funcion to sendEmail for GET PATH, need 3 PARAMS
  async sendEmail(toemail: string, sub: string, message: string) {
    await this.mailService.sendMail({
      to: toemail,
      from: 'emailparaejerciciodenestprueba@gmail.com',
      subject: sub,
      text: message,
    });
    return `The Message has been send successfully`;
  }

  // Async Function sendMail for POST PATH, need one instance of createEmailDto
  async sendMail(createEmailDto: CreateEmailDto) {
    // The email is necesary in lower case for avoid issues
    createEmailDto.toemail = createEmailDto.toemail.toLowerCase();
    // Use try and catch if happend any error
    try {
      await this.mailService.sendMail({
        to: createEmailDto.toemail,
        from: 'emailparaejerciciodenestprueba@gmail.com',
        subject: createEmailDto.sub,
        text: createEmailDto.message,
      });
      return `The Message has been send successfully`;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        `This message cannot send, please check out de server logs`,
      );
    }
  }
}
