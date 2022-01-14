Rails.application.routes.draw do

  resources :posts
  resources :comments

  get '/news', to: 'news#index'

  post '/signup', to: 'users#create'
  get "/me", to: "users#show"

  post '/login', to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
