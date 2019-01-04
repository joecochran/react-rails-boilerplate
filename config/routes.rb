Rails.application.routes.draw do
  root 'pages#index'

  namespace :api, defaults: { format: 'json' } do
    resources :posts, only: [ :index, :create, :show, :destroy, :update ]
  end

  match '*path', to: 'admin#index', via: :all
end
