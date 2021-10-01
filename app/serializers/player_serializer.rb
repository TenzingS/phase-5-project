class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  has_one :team
end
