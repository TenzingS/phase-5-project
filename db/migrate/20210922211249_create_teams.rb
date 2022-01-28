class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.text :name
      t.text :abbreviation
      t.text :conference
      t.text :city
      t.text :image
  

      t.timestamps
    end
  end
end
