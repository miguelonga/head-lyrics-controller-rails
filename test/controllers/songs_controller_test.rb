require 'test_helper'

class SongsControllerTest < ActionController::TestCase

  def setup
    @song = songs(:orange)
  end

  test "should redirect create when not logged in" do
    assert_no_difference 'Song.count' do
      post :create, song: { content: "a" * 241 }
    end
    assert_redirected_to login_url
  end

  test "should redirect destroy when not logged in" do
    assert_no_difference 'Song.count' do
      delete :destroy, id: @song
    end
    assert_redirected_to login_url
  end
end