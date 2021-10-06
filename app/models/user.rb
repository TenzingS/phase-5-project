class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :comments, dependent: :destroy

    validates :password, presence: true
    validates :name, uniqueness: true
end
