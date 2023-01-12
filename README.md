<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description 📋
This project is made for send emails throug nest framework with nodemailer dependecie and use Ethereal mail to send the message (https://ethereal.email), for run this project basic and fast it is important that you enter in this page and create a new mail and click in the boton (Create Ethereal Account) then you copy the Nodemailer Configuration and modify the app module in the transport, disclaimer: the message is only read in this website 

In another instance if you want to send message in Gmail you have to activate two factor auth and the password for divices it is necessary to add in app module that credentials

## Dependencies 🔧
1. Nodemailer
```
npm install nodemailer
```

2. Nodemailer types
```
npm install --save @types/nodemailer
```

3. Validator and Transformer to validate DTO
```
npm install --save class-validator class-transformer
```

## Run Aplication ⚙️
Open CMD and search and open the project folder, run:

```
npm run start:dev
```

## Try Path 🔩
In my case I use Postman but you can use any other aplication to try your Url
**Post**
```
http://localhost:3000/email/send
```
**Body, raw, JSON**
```
{
    "toemail": "youremail@address.com",
    "sub": "Subject",
    "message": "Message"
}
```