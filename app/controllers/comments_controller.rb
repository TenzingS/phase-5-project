class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments
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
        params.permit(:name, :comment, :post_id)
    end
end
