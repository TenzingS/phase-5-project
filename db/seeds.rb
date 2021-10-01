

# require ‘rest-client’

# def secret_key
#     ENV["API_KEY"]
# end

# def nba_dataset

#     api_data = {key: secret_key}

#     nba_teams = RestClient.get("api-nba-v1.p.rapidapi.com#{api_data[:key]}")
# end

User.create(
    name:"Ten", email:"ten@gmail.com", password: "Ten"
)
    Team.create(id: 1610612737, 
    abbreviation: "ATL",
    name: "Atlanta Hawks", 
    conference: "East", 
    city: "Atlanta", 
    image: "https://content.sportslogos.net/logos/6/220/thumbs/22081902021.gif")
    
    Team.create(id: 1610612738, 
    abbreviation: "BOS",
    name: "Boston Celtics", 
    conference: "East",
    city: "Boston", image: "https://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif")

    Team.create(id: 1610612751,
    abbreviation: "BKN",
    name: "Brooklyn Nets",
    conference: "East",
    city: "Brooklyn",
    image: "https://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif")

    Team.create(id: 1610612766,
    abbreviation: "CHA",
    name: "Charlotte Hornets",
    conference: "East",
    city: "Charlotte",
    image: "https://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif")

    Team.create(id: 1610612741,
    abbreviation: "CHI",
    name: "Chicago Bulls",
    conference: "East",
    city: "Chicago",
    image: "https://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif")

    Team.create(id: 1610612739,
    abbreviation: "CLE",
    name: "Cleveland Cavaliers",
    conference: "East",
    city: "Cleveland",
    image: "https://content.sportslogos.net/logos/6/222/thumbs/22269212018.gif")

    Team.create(id: 1610612742,
    abbreviation: "DAL",
    name: "Dallas Mavericks",
    conference: "West",
    city: "Dallas",
    image: "https://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif")

    Team.create(id: 1610612743,
    abbreviation: "DEN",
    name: "Denver Nuggets",
    conference: "West",
    city: "Denver",
    image: "https://content.sportslogos.net/logos/6/229/thumbs/22989262019.gif")

    Team.create(id: 1610612765,
    abbreviation: "DET",
    name: "Detroit Pistons",
    conference: "East",
    city: "Detroit",
    image: "https://content.sportslogos.net/logos/6/223/thumbs/22321642018.gif")

    Team.create(id: 1610612744,
    abbreviation: "GSW",
    name: "Golden State Warriors",
    conference: "West",
    city: "Golden State",
    image: "https://content.sportslogos.net/logos/6/235/thumbs/23531522020.gif")

    Team.create(id: 1610612745,
    abbreviation: "HOU",
    name: "Houston Rockets",
    conference: "West",
    city: "Houston",
    image: "https://content.sportslogos.net/logos/6/230/thumbs/23068302020.gif")

    Team.create(id: 1610612754,
    abbreviation: "IND",
    name: "Indiana Pacers",
    conference: "East",
    city: "Indiana",
    image: "https://content.sportslogos.net/logos/6/224/thumbs/22448122018.gif")

    Team.create(id: 1610612746,
    abbreviation: "LAC",
    name: "Los Angeles Clippers",
    conference: "West",
    city: "Los Angeles",
    image: "https://content.sportslogos.net/logos/6/236/thumbs/23637762019.gif")

    Team.create(id: 1610612747,
    abbreviation: "LAL",
    name: "Los Angeles Lakers",
    conference: "West",
    city: "Los Angeles",
    image: "https://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif")

    Team.create(id: 1610612763,
    abbreviation: "MEM",
    name: "Memphis Grizzlies",
    conference: "West",
    city: "Memphis",
    image: "https://content.sportslogos.net/logos/6/231/thumbs/23143732019.gif")

    Team.create(id: 1610612748,
    abbreviation: "MIA",
    name: "Miami Heat",
    conference: "East",
    city: "Miami",
    image: "https://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif")

    Team.create(id: 1610612749,
    abbreviation: "MIL",
    name: "Milwaukee Bucks",
    conference: "East",
    city: "Milwaukee",
    image: "https://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif")

    Team.create(id: 1610612750,
    abbreviation: "MIN",
    name: "Minnesota Timberwolves",
    conference: "West",
    city: "Minnesota",
    image: "https://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif")

    Team.create(id: 1610612740,
    abbreviation: "NOP",
    name: "New Orleans Pelicans",
    conference: "West",
    city: "New Orleans",
    image: "https://content.sportslogos.net/logos/6/4962/thumbs/496226812014.gif")

    Team.create(id: 1610612752,
    abbreviation: "NYK",
    name: "New York Knicks",
    conference: "East",
    city: "New York",
    image: "https://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif")

    Team.create(id: 1610612760,
    abbreviation: "OKC",
    name: "Oklahoma City Thunder",
    conference: "West",
    city: "Oklahoma City",
    image: "https://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif")

    Team.create(id: 1610612753,
    abbreviation: "ORL",
    name: "Orlando Magic",
    conference: "East",
    city: "Orlando",
    image: "https://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif")

    Team.create(id: 1610612755,
    abbreviation: "PHI",
    name: "Philadelphia 76ers",
    conference: "East",
    city: "Philadelphia",
    image: "https://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif")

    Team.create(id: 1610612756,
    abbreviation: "PHX",
    name: "Phoenix Suns",
    conference: "West",
    city: "Phoenix",
    image: "https://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif")

    Team.create(id: 1610612757,
    abbreviation: "POR",
    name: "Portland Trail Blazers",
    conference: "West",
    city: "Portland",
    image: "https://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif")

    Team.create(id: 1610612758,
    abbreviation: "SAC",
    name: "Sacramento Kings",
    conference: "West",
    city: "Sacramento",
    image: "https://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif")

    Team.create(id: 1610612759,
    abbreviation: "SAS",
    name: "San Antonio Spurs",
    conference: "West",
    city: "San Antonio",
    image: "https://content.sportslogos.net/logos/6/233/thumbs/23325472018.gif")

    Team.create(id: 1610612761,
    abbreviation: "TOR",
    name: "Toronto Raptors",
    conference: "East",
    city: "Toronto",
    image: "https://content.sportslogos.net/logos/6/227/thumbs/22770242021.gif")

    Team.create(id: 1610612762,
    abbreviation: "UTA",
    name: "Utah Jazz",
    conference: "East",
    city: "Utah",
    image: "https://content.sportslogos.net/logos/6/234/thumbs/23467492017.gif")

    Team.create(id: 1610612764,
    abbreviation: "WAS",
    name: "Washington Wizards",
    conference: "East",
    city: "Washington",
    image: "https://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif")

    Player.create(
        name: "Bradley Beal", 
        image: "https://www.basketball-reference.com/req/202106291/images/players/bealbr01.jpg",
        team_id: 1610612764)

    Player.create(
        name: "Spencer Dinwiddie", 
        image: "https://www.basketball-reference.com/req/202106291/images/players/dinwisp01.jpg",
        team_id: 1610612764)

    Player.create(
        name: "Davis Bertans", 
        image: "https://www.basketball-reference.com/req/202106291/images/players/bertada01.jpg",
        team_id: 1610612764)  

    Player.create(
        name: "KCP", 
        image: "https://www.basketball-reference.com/req/202106291/images/players/caldwke01.jpg",
        team_id: 1610612764)
    
    Post.create(
        header: "Bucks win NBA Championship!",
        body: "On Juky 20th, the MilWaukee Bucks win their first title in exactly 50 years! The last time they won was in the 1971 season.",
        user_id:1
        )
puts "Done seeding.."