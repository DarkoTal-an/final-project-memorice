# final-project-memoRice
##An app with 3 use cases- TODO List / Notes / Shopping List

for deployment to heroku-go to "server"-package.json and change the "start script" from nodemon->node.js cause heroku doesn't support it!

and then make a app.get("/", function(req, res) {
  res.send("Hallo Welt ;-)")
})

and a file = Procfile =in it write "web:npm run start"