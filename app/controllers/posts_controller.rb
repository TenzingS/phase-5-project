class PostsController < ApplicationController

      def index
        render json: Post.all
      end
    
      def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
      end

      def update
        post = Post.find_by(id: params[:id])
        if post
            post.update(post_params)
            render json: post, status: :accepted
        else 
            render json: { error: "Post Not Found" }, status: :not_found
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
        params.permit(:header, :body)
      end

end
