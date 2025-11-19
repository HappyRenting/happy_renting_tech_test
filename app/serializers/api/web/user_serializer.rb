# frozen_string_literal: true

module Api::Web
  class UserSerializer < ActiveModel::Serializer
    attributes :id,
               :first_name,
               :last_name,
               :full_name,
               :email,
               :phone,
               :role,
               :created_at,
               :updated_at
  end
end
