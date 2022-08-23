class CreateMessageService
  def run(content:, due_date:, is_complete:)
    @content = content
    @due_date = due_date
    @is_complete = is_complete

    validate_params!
  end

  private

  def validate_params!
    error!('Content cannot be empty') unless content.present?
    error!('Due date cannot be empty') unless due_date.present?

    Message.create!(content:, due_date:, is_complete:)
  end

  def error!(message:)
    raise StandardError.new message
  end
end
