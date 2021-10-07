class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment

  belongs_to :post
  has_many :replies
end
