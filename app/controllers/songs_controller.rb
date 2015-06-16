class SongsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]

  def create
  	@song = current_user.songs.build(song_params)
    if @song.save
      flash[:success] = "Song created!"
      redirect_to root_url
    else
      render 'static_pages/home'
    end
  end

  def destroy
  end

  private

    def song_params
      params.require(:song).permit(:content, :name)
    end
end