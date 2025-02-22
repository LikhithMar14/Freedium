import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';

@Injectable()
export class AppService {
   getHello(): string {
    hash('admin@gmail.com1').then(console.log).catch(console.error);
    return 'Hello World!';
  }
  
}
