import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UserGateway } from './user.gateway';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ // <--- Add JwtModule configuration
      secret: 'YOUR_SECRET_KEY_HERE',
      signOptions: { expiresIn: '60s' },
    }),
    ],
  controllers: [UserController],
  providers: [UserService, UserGateway],
})
export class UserModule {}