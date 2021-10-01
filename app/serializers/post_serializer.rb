class PostSerializer < ActiveModel::Serializer
  attributes :id, :header, :body
  has_one :user
end
