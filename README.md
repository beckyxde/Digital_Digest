# 07.04.2019

# Description

This project a continuation of my final project while studying at Ironhack, 'Digital Digest' (Project3Ironhack in my repositories).

The project uses HackerNews API; HackerNews is a site that my collaborator and I admired for it's aesthetic and cut-though way of sharing relevant information.
Although we love the objective of HackerNews, we also noticed some areas that need improvement. i.e existence of articles unrelated to tech, and articles not being keyword searchable.

In this day and age, people don't have the time to scroll through hundreds of articles and they want their news fast and tailored to their needs. Thus, we've attempted to create a more convenient alternative, and I continue to make improvements. 

# Tools

MongoDB
Mongoose
React.js
Express.js
Passport; Bcrypt
Flexbox
React-strap
Axios
Node.js
Github
Heroku

# Functionality

Signup/Login:
Uses Passport & Bycrypt

Homepage:
  - Instantly renders latest articles from hackernews containing set keywords
  - Search functionality - whole Hackernews API by keyword string
  - Links to original article sources
  - Coming soon: functioning save button

API Navigation:
Latest articles -
  - Search through the 800 newest stories on the HackerNews API
  - Remove ones without URL or not type “story”

Keywords -
  - Articles are filtered by tech keywords

External Search -
  - Can search through the original HackerNews database by typed title keyword

Collections -
  - Displays user-created collections of saved articles
  - Created collection ID saved to User in Mongodb
    - This links to a collection model in Mongodb containing the articles saved to each collection by that user


# Coming Soon

 - Retention of user session to render user’s collections
 - Nodemailer would be awesome!
 - Suggested articles at bottom of collection page (based on keyword search of HackerNews)

 # Sources

 https://github.com/HackerNews/API
