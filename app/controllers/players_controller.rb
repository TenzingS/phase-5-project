class PlayersController < ApplicationController
    require 'rest-client'
    
    def index
        url = "https://www.balldontlie.io/api/v1/players?per_page=100"
        players = RestClient.get(url)
        render json: players
    end

    def show
        name = params[:name]
        player = RestClient.get("https://www.balldontlie.io/api/v1/players/?search=#{name}")
        render json: player
    end
end
