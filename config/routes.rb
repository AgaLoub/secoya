Rails.application.routes.draw do
  get 'contacts/new'

  get 'contact/new'

  root to: 'pages#home'
  get 'blog', to: 'blog#home', as: :blog
  get 'legal', to: 'legal#home', as: :legal

  resources :contacts, only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
