OsuCelebrity-web ![OsuCelebrity-web Build Status](https://travis-ci.org/OsuCelebrity/OsuCelebrity-web.svg?branch=master)
=====================
This repository is in charge of maintaining the website which accompanies the [OsuCelebrity](https://github.com/OsuCelebrity/OsuCelebrity) program. It connects to the program through it's closed API to provide real-time information about the current events on the stream. 

# Getting Started

Alright now the fun begins. First clone or download the repo to your computer. 

1. Clone the repository ```git clone git@github.com:osucelebrity/osucelebrity-web.git```.
1. Go into the repository ```cd osucelebrity-web/```.
1. Connect to the vagrant box ```vagrant up && vagrant ssh```
1. Navigate to the share file directory ```cd /vagrant```
1. Install dependencies with NPM ```npm install```. (For Windows users, do this on Windows, not vagrant!)
1. Plug in your keys for working with Twitch into ```/config/env/development.js```.
1. Wire up the database connection found in ```/config/env/development.js```.
1. Initialize Grunt task runner ```grunt```.
1. Make something awesome!

Thats all! Now go and open up your browser at [http://localhost:3000](http://localhost:3000).


## Prerequisites
- Vagrant - Vagrant allows you to run a virtual machine which contains all of the development tools for the project. You can download this at https://vagrantup.com/
