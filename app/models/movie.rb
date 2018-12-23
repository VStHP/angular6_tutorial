class Movie < ApplicationRecord
  scope :_name_or_release_year, ->(value) do
    where('name like ? or release_year like ?', "%#{value}%", "%#{value}%")
  end
end
