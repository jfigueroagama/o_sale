class ApplicationController < ActionController::Base

    private

    def current_user
        @current_user ||= User.find_by(id: cookies.signed[:user_id])
    end

    helper_method :current_user     # The current_method will be available in the view
end
