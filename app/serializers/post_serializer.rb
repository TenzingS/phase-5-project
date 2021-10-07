class PostSerializer < ActiveModel::Serializer
  attributes :id, :header, :body
  has_one :user
  has_many :comments
end
