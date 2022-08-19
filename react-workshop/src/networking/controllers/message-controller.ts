import { MessageSerializer } from 'networking/serializers/message-serializer';
import { ApiService } from 'networking/api-service';
import { API_ROUTES } from 'networking/api-routes';

class MessageController {
  static async getMessages() : Promise<Message[]> {
    const response = await ApiService.get<RawMessage[]>(API_ROUTES.MESSAGES);
    return (response.data || []).map(MessageSerializer.deSerialize);
  }

  static async createMessage(message: NewMessage) : Promise<Message> {
    const serializedData = MessageSerializer.serialize(message);
    const response = await ApiService.post<RawMessage>(API_ROUTES.MESSAGES, serializedData);

    return MessageSerializer.deSerialize(response.data);
  }
}

export { MessageController };
