import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anilist')
        .setDescription('Commands to access anilist user profile')
        .addSubcommandGroup(subcommand =>
            subcommand.setName('profile')
            .setDescription('Get the anilist profile of a user')
            .addSubcommand(subcommand =>
                subcommand.setName('anime')
                .setDescription('Get the anime list of the specified anilist username')
                .addStringOption(option =>
                    option.setName('username')
                    .setDescription('The Anilist username to get the anime list from')
                    .setRequired(true))
                .addStringOption(option => 
                    option.setName('list')
                    .setDescription('Optionally specify a list (e.g Completed/Watching)')
                    .setRequired(false)))
            .addSubcommand(subcommand =>
                subcommand.setName('manga')
                .setDescription('Get the manga list of the specified anilist username')
                .addStringOption(option =>
                    option.setName('username')
                    .setDescription('The Anilist username to get the manga list from')
                    .setRequired(true))
                .addStringOption(option =>
                    option.setName('list')
                    .setDescription('Optionally specify a list (e.g Reading/Paused)')
                    .setRequired(false))))
            .addSubcommand(subcommand =>
                subcommand.setName('all')
                .setDescription('Get the anime and manga list of the specified anilist username')
                .addStringOption(option =>
                    option.setName('username')
                    .setDescription('The Anilist username to get the list from')
                    .setRequired(true))
                .addStringOption(option =>
                    option.setName('list')
                    .setDescription('Optionally specify a list (e.g Reading/Paused/Completed)') // if exists for both anime and manga show both (separately)
                    .setRequired(false)
                )
        ).addSubcommandGroup(subcommand =>
            subcommand.setName('search')
            .setDescription('Search for an anime or manga using autocompletion'))
            .addSubcommand(subcommand =>
                subcommand.setName('anime')
                .setDescription('Search for the given anime')
                .addStringOption(option => 
                    option.setName('title')
                    .setDescription('Start typing to autocomplete search results')
                    .setRequired(true)))
            .addSubcommand(subcommand =>
                subcommand.setName('manga')
                .setDescription('Search for the given manga')
            .addStringOption(option => 
                option.setName('title')
                .setDescription('Start typing to autocomplete search results')
                .setRequired(true)
            )
        ),

        async execute(interaction: ChatInputCommandInteraction) {
            await interaction.reply('anilist')

            console.log(`User ${interaction.user.tag} used command ${interaction}`);
        },
}