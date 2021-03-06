const { Command } = require('discord-akairo');
const moment = require('moment');

class UserCommand extends Command {
	constructor() {
		super('user', {
			aliases: ['user', 'userinfo'],
			category: 'info',
			channel: 'guild',
			clientPermissions: ['EMBED_LINKS'],
			args: [
				{
					id: 'member',
					type: 'member',
					default: message => message.member
				}
			],
			description: {
				content: 'Get info about a member.',
				usage: '<member>',
				examples: ['@Moni', 'Suvajit', '444432489818357760', 'CαdσAиgєlυs']
			}
		});
	}

	exec(message, { member }) {
		const { user } = member;

		const embed = this.client.util.embed()
			.setColor('RANDOM')
			.setAuthor(`${member.user.tag} (${member.user.id})`, user.displayAvatarURL())
			.setThumbnail(user.displayAvatarURL())
			.addField('❯ Member Details', [
				`${member.nickname ? `• Nickname: ${member.nickname}` : ''}`,
				`• Joined at: ${moment.utc(member.joinedAt).format('DD/MM-YYYY kk:mm:ss')}`,
				`• Roles: ${member.roles.filter(role => role.id !== message.guild.id).map(role => `*${role}*`).join(', ')}`
			])
			.addField('❯ User Details', [
				`${user.bot ? '• Bot Account' : ''}`,
				`• ID: ${user.id}`,
				`• Created at: ${moment.utc(user.createdAt).format('DD/MM/YYYY kk:mm:ss')}`,
				`• Status: ${user.presence.status.toUpperCase()}`,
				`• Activity: ${user.presence.activity ? user.presence.activity.name : 'None'}`
			]);
		return message.util.send({ embed });
	}
}

module.exports = UserCommand;
