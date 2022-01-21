
User.create(
    name:"Ten", email:"ten@gmail.com", password: "Ten"
)

Post.create(
    header: "Bucks win NBA Championship!",
    body: "On July 20th, the Milwaukee Bucks win their first title in exactly 50 years! The last time they won was in the 1971 season.",
    user_id:1
    )

Post.create(
    header: "NBA Preseason starts this sunday!",
    body: "The first game will be between the Nets and the Lakers. They are the 2 main favorites to reach the finals this coming season.",
    user_id:1
    )

    Comment.create(name: "Ten", comment:"Giannis was amazing!!", user_id: 1, post_id: 1)

    Comment.create(name: "Ten", comment:"Yeah if they're healthy, the season is down to those 2 teams.", user_id: 1, post_id: 2)

    Comment.create(name: "Ten", comment: "I agree!", user_id: 1, post_id: 2)


    
puts "Done seeding.."