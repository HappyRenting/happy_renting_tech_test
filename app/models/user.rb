class User < ApplicationRecord
  include Decoratable

  delegate :full_name, to: :decorate

  enum :role, { member: 0, admin: 1 }

  validates :first_name, :last_name, presence: true
  validates :role, inclusion: { in: roles.keys }
end
