# frozen_string_literal: true

require 'rails_helper'

RSpec.describe UserDecorator do
  let(:user) { build(:user, first_name: 'John', last_name: 'Smith').decorate }

  describe 'methods' do
    describe '#full_name' do
      it { expect(user.full_name).to eq("SMITH John") }
    end
  end
end
