import { Controller, Get, Query } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';
//import { CreateEmailDto } from './dto/create-email.dto';
//import { UpdateEmailDto } from './dto/update-email.dto';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}
  @Get('send')
  plainTextEmail(
    @Query('toemail') toemail,
    @Query('sub') sub,
    @Query('message') message,
  ) {
    return this.emailService.sendEmail(toemail, sub, message);
  }

  /* @Get('send')
  async plainTextEmail(
    @Query('toemail') toemail,
    @Query('sub') sub,
    @Query('message') message,
  ) {
    console.log('Afuera de la funcion');
    await this.mailService.sendMail({
      to: toemail,
      from: 'emailparaejerciciodenestprueba@gmail.com',
      subject: sub,
      text: message,
    });
    return 'success';
  }
 */
}
