class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
  
    def show
      render json: @current_user
    end

    def update
      user = User.find(params[:id])
      user.update(users_params)
      render json: user
    end

    def destroy
      user = User.find_by(id: params[:id])
      if user
          user.destroy
          head :no_content
      else
          render json: {error: "Not Found"}, status: :not_found
      end
    end
  
    private
  
    def user_params
      params.permit(:name, :email, :password)
    end

end
