class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :name, :post_id, :user_id

  belongs_to :post
  has_many :replies
end
