import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@WebSocketGateway()
export class UserGateway {
  constructor(private readonly userService: UserService) {}
}