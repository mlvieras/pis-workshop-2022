type RawNewMessage = {
  content: string,
  due_date: string,
  is_complete: boolean,
};

type RawMessage = RawNewMessage & {
  id: number,
};

type NewMessage = {
  content: string,
  dueDate: Date,
  isComplete: boolean,
};

type Message = NewMessage & {
  id: number,
};
