import { Controller, Get, Query } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';
//import { CreateEmailDto } from './dto/create-email.dto';
//import { UpdateEmailDto } from './dto/update-email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly mailService: MailerService) {}

  @Get('send')
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

  /*   @Get('send')
  async plainTextEmail(@Query('toemail') toemail) {
    console.log('Afuera de la funcion');
    await this.mailService.sendMail({
      to: toemail,
      from: 'emailparaejerciciodenestprueba@gmail.com',
      subject: 'Este es un mensaje de Prueba',
      text: 'Estimados envio un cordial saludo mediante este instrumento! Mail Automatico :D',
    });
    return 'success';
  } */
}
