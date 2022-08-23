  # frozen_string_literal: true

  class MessagesController < ApplicationController
    def index
      render json: Message.all
    end

    def create
      create_params = params.require(:message).permit(:content, :due_date, :is_complete)

      message = Message.create!(create_params)

      render json: message
    end
  end
