class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :image
      t.belongs_to :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
