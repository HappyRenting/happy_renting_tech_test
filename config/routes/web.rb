root "home#index"

resources :users, only: :index

get "users/*", to: "users#index"
