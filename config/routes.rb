Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "products#index"

  resources :products do
    resources :comments, only: [:create]    # product_comments_path
  end

  get 'users/new', to: 'users#new', as: 'new_user'
  get '/signup', to: 'users#new'

  resources :users, only: [:create]

  get '/signin', to: 'sessions#new'
  post '/signin', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy', as: 'session'

  #get '/products', to: 'products#index'
  #get 'products/new', to: 'products#new', as: 'new_product'
  #get '/products/:id', to: 'products#show', as: 'product'
  #post '/products', to: 'products#create'
  #get '/products/:id/edit', to: 'products#edit', as: 'edit_product'
  #patch '/products/:id', to: 'products#update'
  #delete '/products/:id', to: 'products#destroy'
end
