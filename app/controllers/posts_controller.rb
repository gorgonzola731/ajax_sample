class PostsController < ApplicationController
  before_action :set_message, only: %i[destroy]

  def index
    @posts = Post.all
    @post = Post.new
  end

  def create
    Post.create(post_params)
    @posts = Post.all
  end


  private
  def post_params
    params.require(:post).permit(:title, :content)
  end

end
