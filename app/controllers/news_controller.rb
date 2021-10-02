class NewsController < ApplicationController
    require 'rest-client'
    ENV['API_KEY']

    def index
        url = "https://newsapi.org/v2/everything?q=NBA&from=2021-09-04&to=2021-10-01&apiKey=API_KEY"
        news = RestClient.get(url)
        render json: news
    end

end
