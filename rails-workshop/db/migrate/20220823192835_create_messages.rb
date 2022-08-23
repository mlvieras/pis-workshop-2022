class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :content
      t.date :due_date
      t.boolean :is_complete

      t.timestamps
    end
  end
end
