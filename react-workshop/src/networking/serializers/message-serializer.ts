class MessageSerializer {
  static deSerialize(data: RawMessage) : Message {
    return {
      id: data.id,
      content: data.content,
      dueDate: new Date(data.due_date),
      isComplete: data.is_complete,
    };
  }

  static serialize(message: NewMessage) : RawNewMessage {
    return {
      content: message.content,
      due_date: message.dueDate.toISOString(),
      is_complete: message.isComplete,
    };
  }
}

export { MessageSerializer };
