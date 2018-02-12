Rails.application.routes.draw do
  get 'contact/new'

  root to: 'pages#home'
  get 'blog', to: 'blog#home', as: :blog

  # resources :contacts, only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
