class PlayerStatsController < ApplicationController
    require 'rest-client'

    def show
        id = params[:id]
        player_stat = RestClient.get("https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=#{id}")
        render json: player_stat
    end
end
