class StaticPagesController < ApplicationController
  def home
  	 @song = current_user.songs.build if logged_in?
  	 @songs = current_user.songs.to_a
  end
end
