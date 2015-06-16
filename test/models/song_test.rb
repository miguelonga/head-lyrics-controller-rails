require 'test_helper'

class SongTest < ActiveSupport::TestCase
  def setup
    @user = users(:michael)
    @songs = @user.songs.build(name: "Foo Bar", content: "a" * 241)
  end

  test "should be valid" do
    assert @songs.valid?
  end

  test "user id should be present" do
    @songs.user_id = nil
    assert_not @songs.valid?
  end

  test "name should be present" do
    @songs.name = "   "
    assert_not @songs.valid?
  end

  test "content should be present" do
    @songs.content = "   "
    assert_not @songs.valid?
  end

  test "content should be at less 240 characters" do
    @songs.content = "Ñorem impsumun"
    assert_not @songs.valid?
  end
end
