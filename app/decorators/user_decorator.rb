# frozen_string_literal: true

class UserDecorator < ApplicationDecorator
  def full_name
    @full_name ||= "#{last_name&.upcase} #{first_name}"
  end
end
