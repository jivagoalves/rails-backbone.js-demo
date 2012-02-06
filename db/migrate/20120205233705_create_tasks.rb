class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :description
      t.date :completed_at
      t.date :due_date

      t.timestamps
    end
  end
end
