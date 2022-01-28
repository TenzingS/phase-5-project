class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.text :name
      t.text :password_digest
      t.text :email

      t.timestamps
    end
  end
end
