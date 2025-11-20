require 'rails_helper'

module Api::Web
  RSpec.describe UsersController, type: :request do
    describe 'GET #index' do
      let(:users) { create_list(:user, 2) }

      before { users && get('/api/web/users.json') }

      it { expect(response).to have_http_status(:ok) }
      it { expect(response.content_type).to include('application/json') }
      it { expect(response.parsed_body.size).to eq(2) }
    end

    describe "GET #show" do
      context 'with existing user' do
        let(:user) { create(:user) }

        before { get("/api/web/users/#{user.id}.json") }

        it { expect(response).to have_http_status(:ok) }
        it { expect(response.content_type).to include('application/json') }
        it { expect(response.parsed_body['id']).to eq(user.id) }
      end

      context 'with unexisting user' do
        before { get("/api/web/users/9999.json") }

        it { expect(response).to have_http_status(:not_found) }
      end
    end

    describe "POST #create" do
      before { post('/api/web/users.json', params: params) }

      context 'with valid params' do
        let(:params) { { user: attributes_for(:user, first_name: 'firstName') } }

        it { expect(response).to have_http_status(:created) }
        it { expect(response.content_type).to include('application/json') }
        it { expect(response.parsed_body['first_name']).to eq('firstName') }
      end

      context 'with invalid params' do
        let(:params) { { user: attributes_for(:user, first_name: nil) } }

        it { expect(response).to have_http_status(:unprocessable_content) }
        it { expect(response.content_type).to include('application/json') }
        it { expect(response.parsed_body['errors']).to include("First name can't be blank") }
      end
    end

    describe "PUT #update" do
      let(:user) { create(:user) }

      before { put("/api/web/users/#{user.id}.json", params: params) }

      context 'with valid params' do
        let(:params) { { user: { first_name: 'UpdatedName' } } }

        it { expect(response).to have_http_status(:ok) }
        it { expect(response.content_type).to include('application/json') }
        it { expect(response.parsed_body['first_name']).to eq('UpdatedName') }
      end

      context 'with invalid params' do
        let(:params) { { user: { first_name: nil } } }

        it { expect(response).to have_http_status(:unprocessable_content) }
        it { expect(response.content_type).to include('application/json') }
        it { expect(response.parsed_body['errors']).to include("First name can't be blank") }
      end
    end

    describe "DELETE #destroy" do
      let(:user) { create(:user) }

      before { delete("/api/web/users/#{user.id}.json") }

      it { expect(response).to have_http_status(:ok) }
      it { expect(response.content_type).to include('application/json') }
      it { expect(response.parsed_body['message']).to eq('User deleted successfully') }
    end
  end
end
