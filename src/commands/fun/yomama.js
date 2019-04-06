const { Command } = require('discord-akairo');

class YomamaCommand extends Command {
    constructor() {
        super('yomama', {
            aliases: ['yomama'],
            category: 'fun',
            channel: 'guild',
            clientPermissions: ['SEND_MESSAGES'],
            description: {
                content: 'Get A Random YoMama Joke.',
                usage: '!yomama',
                examples: ['yomama']
            }
        });
    }

    exec(message) {
        let joke = require('../../random/yomama.json');
        let randomQ = joke[Math.floor(Math.random() * joke.length)];
        return message.channel.send(randomQ);
    }
}

module.exports = YomamaCommand;
