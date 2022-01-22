class CommentsController < ApplicationController
    wrap_parameters format: []
    def index
        post = Post.find_by(id: params[:post_id])
        comments = post.comments
        render json: comments
    end

    def show
        post = Post.find_by(id: params[:post_id])
        comment = post.comments.find_by(id: params[:id])
        if comment 
            render json: comment
        else
            render json: {error: "Not Found"}, status: :not_found
        end
    end

    def create
        post = Post.find_by(id: params[:post_id])
        comment = post.comments.create!(comment_params)
        if comment
            render json: comment, status: :created
        else
            render json: { error: comment.errors.full_messages }, status: :unprocessable_entity
        end
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
