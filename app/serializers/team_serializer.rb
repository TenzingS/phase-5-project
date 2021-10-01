class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :abbreviation, :conference, :city
end
