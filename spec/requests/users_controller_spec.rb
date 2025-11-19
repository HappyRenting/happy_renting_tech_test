require 'rails_helper'

RSpec.describe UsersController, type: :request do
  describe "GET /index" do
    context 'with valid content-type' do
      before { get('/users') }

      it { expect(response).to have_http_status(:ok) }
      it { expect(response.body).to render_template('layouts/application') }
      it { expect(response.body).to render_template(:index) }
    end
  end
end
