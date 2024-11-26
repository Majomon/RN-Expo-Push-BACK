import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PushNotificationsService } from './push-notifications/push-notifications.service';

@Controller()
export class AppController {
  constructor(
    private readonly pushNotificationService: PushNotificationsService,
  ) {}

  /*   @Get()
  getHello(): string {
    return this.appService.getHello();
  } */

  @Post('/send-notification')
  sendNotification(@Body() body: { to: string[] }) {
    // const toTokens = ['ExponentPushToken[4a0Bp7P1toUCg-IGHobnq8]'];
    this.pushNotificationService.sendNotification(body.to);
  }
}
