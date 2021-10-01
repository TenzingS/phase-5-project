Rails.application.routes.draw do

  resources :news, only: [:index, :show]
  resources :posts, only: [:index, :create, :destroy, :update]
  resources :player_stats, only: [:show]
  resources :players, only: [:index, :show]
  resources :team_stats, only: [:show]
  resources :teams, only: [:index, :show]

  get '/playerstats/:id', to: 'player_stats#show'
  post '/signup', to: 'users#create'
  get "/me", to: "users#show"

  post '/login', to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
