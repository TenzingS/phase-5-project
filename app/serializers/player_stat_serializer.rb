class PlayerStatSerializer < ActiveModel::Serializer
  attributes :id, :points, :rebounds, :assists, :steals, :blocks, :fg, :threept, :ft, :efg
  has_one :player
end
