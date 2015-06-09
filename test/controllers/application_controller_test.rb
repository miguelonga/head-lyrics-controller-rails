require 'test_helper'

class ApplicationControllerTest < ActionController::TestCase

	test "should work" do
		get :index
		assert_response :success
	end
end