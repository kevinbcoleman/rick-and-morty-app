# rick-and-morty-app
Repository for my Rick and Morty app. Unit-1 Project
Netlify link: https://eloquent-kirch-31f08c.netlify.app/

Rick and Mortified was built using HTML, CSS, JavaScript, and data pulled from the Rick and Morty API.
I started off by building the card gallery for the characters and added the groundwork for styling with Flexbox in order to give things shape

After that I started fleshing out my Modal with jQuery and then began making calls to the API to pull character info and pictures. That allowed
me to start assigning things to variables in jQuery and populate the cards and Modal. 

The API was quick but imposed some limitations on what I initially wanted to do since the results were paginated and each call only returned 20 results. This
caused me to have to make multiple AJAX calls in order to get the characters and the episode info which were linked to different API Endpoints.

The "Episode" API Endpoint didnt provide episode info, which limited the information I could provide in that regard from the source so I decided to just list
the episodes themselves.

I also started with a Mobile First approach so things became Responsive in a straightforward manner. At this point, I shifted my focus to refactoring the
JavaScript to eliminate some of the hardcoded areas from early stages and impliment more functions. 

As far as improvements, next I would look into ways to take full advantage of the API in any way that could allow me more flexibility to access more data without 
having to make repeated and spaced out calls. I would also add more page functionality such as features to help you pick an episode to watch or search for other characters. 

