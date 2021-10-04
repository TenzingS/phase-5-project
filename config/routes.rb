Rails.application.routes.draw do


  resources :player_stats, only: [:show]
  resources :team_stats, only: [:show]

  get '/comments', to: 'comments#index'

  get '/news', to: 'news#index'
  
  resources :posts

  get '/teams', to: 'teams#index'
  get '/teams/:id', to: 'teams#show'

  get '/players', to: 'players#index'
  get '/players/:id', to: 'players#show'

  get '/playerstats/:id', to: 'player_stats#show'
  post '/signup', to: 'users#create'
  get "/me", to: "users#show"

  post '/login', to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
