class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :email, :comments

  has_many :posts
end
