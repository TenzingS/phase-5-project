class CommentsController < ApplicationController

    def index
        render json: Comment.all
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
        params.permit(:name, :comment)
    end
end
