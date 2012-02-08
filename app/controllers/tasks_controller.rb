class TasksController < ApplicationController
  respond_to :html, :json

  def index
    respond_with(@tasks = Task.all)
  end

  def create
    respond_with(@task = Task.create(params[:task]))
  end
end
