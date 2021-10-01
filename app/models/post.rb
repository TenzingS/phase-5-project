class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  validates :header, :body, presence: true

#   validate :text_must_be_decent

# def text_must_be_decent
#   if header.include?("shit","fuck","dumbass","bullshit","fucking","twat","bitch")
#     errors.add(:header, 'Wash your mouth out with soap!')
#   end
# end

end
