# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ApplicationDecorator do
  subject(:users) { described_class.wrap(create_list(:user, 2)) }

  describe 'methods' do
    describe '#wrap' do
      it { expect(users).to all(respond_to(:full_name)) }
    end
  end
end
