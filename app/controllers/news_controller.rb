class NewsController < ApplicationController
    ENV["API_KEY"]
    require 'rest-client'

    def index
        url = "https://newsapi.org/v2/everything?q=NBA&language=en&from=2021-10-04&apiKey=f0cc581cbfb5476aab032a1f24d1d761"
        news = RestClient.get(url)
        render json: news
    end

end
