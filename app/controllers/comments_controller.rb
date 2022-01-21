class CommentsController < ApplicationController
    wrap_parameters format: []
    def index
        comments = Comment.all
        render json: comments
    end

    def show
        comment = Comment.find_by(id:params[:id])
        if comment 
            render json: comment
        else
            render json: {error: "Not Found"}, status: :not_found
        end
    end

    def create
        post = Post.find(params[:post_id])
        comment = post.comments.create!(comment_params)
        render json: comment, status: :created
    end

    def destroy
        post = Post.find(params[:post_id])
        comment = post.comments.find(params[:id])
        comment.destroy
    end

    private

    def comment_params
        params.permit(:comment)
    end
end
