# frozen_string_literal: true

require 'rails_helper'

RSpec.shared_examples_for 'decoratable' do
  describe 'methods' do
    let(:model) { described_class }

    describe '#decorate' do
      it { expect(model.new.decorate).to be_a("#{model.name}Decorator".constantize) }
    end
  end
end
