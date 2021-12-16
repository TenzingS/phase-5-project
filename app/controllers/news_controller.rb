class NewsController < ApplicationController
    API_KEY = ENV["api_key"]
    require 'rest-client'

    def index
        url = "https://newsapi.org/v2/everything?q=NBA&language=en&from=2021-11-20&apiKey=#{API_KEY}"
        news = RestClient.get(url)
        render json: news
    end

end
