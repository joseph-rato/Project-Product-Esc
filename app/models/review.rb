class Review < ApplicationRecord
  validates :rating, :comment, :product_id, :user_id, presence: true
  validates :product_id, uniqueness: {scope: :user_id}
  belongs_to :user
  belongs_to :product
  has_many :product_discussions
  has_many :likes, as: :liked
end
