/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @see https://github.com/TimboKZ/discord-spoiler-bot
 * @copyright 2017
 * @license MIT
 */

module.exports = require('./src/SpoilerBot');

'use strict';

const express = require('express');
const http = require('http');
const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received. I'm not sleeping, I promise.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const SpoilerBot = require('./src/SpoilerBot');

let config = {
    token: process.env.BOT_TOKEN,
    maxLines: 10,
	markRoleIds: [
        '312435297239564288',
        '312435297239564288'  ],
	
	gif: {
        placeholderText: '(Passe o mouse para revelear o spoiler)',
        colours: {
            background: '#36393e',
            stroke: '#b2ac94',
            text: '#c0c0c0',
            placeholder: '#ded9d9',
        }
    },
};

let bot = new SpoilerBot(config);
bot.connect();
