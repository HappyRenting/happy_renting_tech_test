require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'db' do
    it_behaves_like 'decoratable'

    describe 'columns' do
      it { is_expected.to have_db_column(:id).of_type(:integer).with_options(null: false, primary: true) }
      it { is_expected.to have_db_column(:first_name).of_type(:string).with_options(default: '', null: false) }
      it { is_expected.to have_db_column(:last_name).of_type(:string).with_options(default: '', null: false) }
      it { is_expected.to have_db_column(:email).of_type(:string).with_options(default: '', null: false) }
      it { is_expected.to have_db_column(:phone).of_type(:string).with_options(default: '', null: false) }
      it { is_expected.to have_db_column(:role).of_type(:integer).with_options(default: :member) }
      it { is_expected.to have_db_column(:created_at).of_type(:datetime).with_options(null: false) }
      it { is_expected.to have_db_column(:updated_at).of_type(:datetime).with_options(null: false) }
    end

    describe 'indexes' do
      it { is_expected.to have_db_index(:email).unique }
    end
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:first_name) }
    it { is_expected.to validate_presence_of(:last_name) }
  end

  describe 'enums' do
    it { is_expected.to define_enum_for(:role).with_values(member: 0, admin: 1) }
  end
end
