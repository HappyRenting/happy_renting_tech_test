# frozen_string_literal: true

module Decoratable
  extend ActiveSupport::Concern

  included do
    def decorate
      "#{self.class.name}Decorator".constantize.new(self)
    end
  end
end
