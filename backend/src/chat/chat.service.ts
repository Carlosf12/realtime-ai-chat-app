import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  async saveMessage(sender: string, content: string): Promise<Message> {
    const newMessage = this.messageRepository.create({ sender, content });
    return this.messageRepository.save(newMessage);
  }

  async getMessages(): Promise<Message[]> {
    return this.messageRepository.find();
  }
}