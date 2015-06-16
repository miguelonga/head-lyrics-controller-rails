class StaticPagesController < ApplicationController
  def home
  	 @song = current_user.songs.build if logged_in?
  end
end
