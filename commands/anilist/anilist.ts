import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";


module.exports = {
    data: new SlashCommandBuilder()
        .setName('anilist')
        .setDescription('Commands to access anilist user profile')
        .addSubcommand(subcommand =>
            subcommand
                .setName('anime')
                .setDescription('Get the anime list of the specified anilist username')
                .addStringOption(option =>
                    option.setName('username')
                    .setDescription('The Anilist username to get the anime list from')
                    .setRequired(true))
                .addStringOption(option => 
                    option.setName('list')
                    .setDescription('Optionally specify a list (e.g Completed/Watching)')
                    .setRequired(false)
                )
        ).addSubcommand(subcommand =>
            subcommand
                .setName('manga')
                .setDescription('Get the manga list of the specified anilist username')
                .addStringOption(option =>
                    option.setName('username')
                    .setDescription('The Anilist username to get the manga list from')
                    .setRequired(true))
                .addStringOption(option =>
                    option.setName('list')
                    .setDescription('Optionally specify a list (e.g Reading/Paused)'))
        ),

        async execute(interaction: ChatInputCommandInteraction) {
            await interaction.reply('anilist')

            console.log(`User ${interaction.user.tag} used command ${interaction}`);
        },
}