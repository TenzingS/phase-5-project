class TeamStatSerializer < ActiveModel::Serializer
  attributes :id, :points, :rebounds, :assists, :steals, :blocks, :fg, :threept, :ft, :efg
  has_one :team
end
