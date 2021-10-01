class TeamsController < ApplicationController

    require 'rest-client'
    
    def index
        url = "https://www.balldontlie.io/api/v1/teams"
        teams = RestClient.get(url)
        render json: teams
    end

    def show
        id = params[:id]
        team = RestClient.get("https://www.balldontlie.io/api/v1/teams/#{id}")
        render json: team
    end

end
