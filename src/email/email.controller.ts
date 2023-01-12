import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { EmailService } from './email.service';
import { CreateEmailDto } from './dto';

@Controller('email')
export class EmailController {
  // To create an instance of EmailService Class
  constructor(private readonly emailService: EmailService) {}
  // GET PATH need a 3 Params
  @Get('send')
  plainTextEmail(
    @Query('toemail') toemail,
    @Query('sub') sub,
    @Query('message') message,
  ) {
    // Then calls a emailService Method => sendEmail and give the params
    return this.emailService.sendEmail(toemail, sub, message);
  }

  // POST PATH need and instance of crateEmailDto
  @Post('send')
  plainEmail(@Body() createEmailDto: CreateEmailDto) {
    // Then calls a emailService Method => sendMail and give the instance
    return this.emailService.sendMail(createEmailDto);
  }
}
