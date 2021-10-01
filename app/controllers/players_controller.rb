class PlayersController < ApplicationController
    require 'rest-client'
    
    def index
        url = "https://www.balldontlie.io/api/v1/players"
        players = RestClient.get(url)
        render json: players
    end

    def show
        id = params[:id]
        player = RestClient.get("https://www.balldontlie.io/api/v1/players/#{id}")
        render json: player
    end
end
