class PostsController < ApplicationController
  wrap_parameters format: []

  before_action :authorize, only: [:update, :destroy]

      def index
        render json: Post.all
      end

      def show
        post = Post.find_by(id: params[:id])
        if post
          render json: post
        else
          render json: {error: "Not Found"}, status: :not_found
        end
      end
    
      def create
          post = Post.create!(post_params)
          render json: post, status: :created 
      end

      def update
          post = Post.find_by(id: params[:id])
          if (post.user_id == @current_user.id)
            post.update(post_params)
            render json: post, status: :accepted
          else 
              render json: { error: "Can't edit post" }, status: :not_found
          end
      end

    def destroy
        post = Post.find_by(id: params[:id])
       if post
            post.destroy
       else
            render json: {error: "Not Found"}, status: :not_found
       end
    end
    
      private
    
      def post_params
        params.permit(:header, :body, :user_id, :id)
      end

end
