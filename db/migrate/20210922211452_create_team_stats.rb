class CreateTeamStats < ActiveRecord::Migration[6.1]
  def change
    create_table :team_stats do |t|
      t.float :points
      t.float :rebounds
      t.float :assists
      t.float :steals
      t.float :blocks
      t.float :fg
      t.float :threept
      t.float :ft
      t.float :efg
      t.belongs_to :team, null: false, foreign_key: true

      t.timestamps
    end
  end
end
