class CommentsController < ApplicationController

  def show 
    @comment = Comment.find(params[:id])
  end 

  def index 
    @comments = Comment.all
  end 

  def create 
    @comment = Comment.new(comment_params)
    
    if @comment.save 
      render 'comments/show'
    else 
      render json: @comment.errors.full_messages, status: 403
    end 
  end 

  private 
  def comment_params 
    params.require(:comment).permit(:user_id, :blog_post_id, :body, :comment_id)
  end 
  
end
