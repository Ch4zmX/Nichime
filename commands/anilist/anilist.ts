import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('anilist')
        .setDescription('Commands to access anilist user profile')
        .addSubcommand(subcommand =>
                subcommand.setName('profile')
                .setDescription('Get the anilist profile of a user')
                .addStringOption(option =>
                    option.setName('username')
                    .setDescription('The Anilist username to get the anime list from')
                    .setRequired(true))
                .addStringOption(option =>
                    option.setName('medium')
                    .setDescription('Whether to show user\'s anime, manga, or all anilist media types')
                    .addChoices(
                        {name: 'Anime', value: 'anime'},
                        {name: 'Manga', value: 'manga'},
                        {name: 'All', value: 'all'})
                    .setRequired(false))
                .addStringOption(option => 
                    option.setName('list')
                    .setDescription('Optionally specify a list (e.g Completed/Watching/Reading)') // if exists for both anime and manga show both (separately)
                    .setRequired(false)))
        .addSubcommandGroup(subcommand =>
                subcommand.setName('search')
                .setDescription('Search for an anime or manga using autocompletion')
                .addSubcommand(subcommand =>
                    subcommand.setName('anime')
                    .setDescription('Search for the given anime')
                    .addStringOption(option => 
                        option.setName('title')
                        .setDescription('Start typing to autocomplete search results')
                        .setRequired(true)
                        .setAutocomplete(true)
                    )
                )
                .addSubcommand(subcommand =>
                    subcommand.setName('manga')
                    .setDescription('Search for the given manga')
                    .addStringOption(option => 
                        option.setName('title')
                        .setDescription('Start typing to autocomplete search results')
                        .setRequired(true)
                        .setAutocomplete(true)
                    )
                )
        ),

        async execute(interaction: ChatInputCommandInteraction) {
            await interaction.reply('anilist')

            console.log(`User ${interaction.user.tag} used command ${interaction}`);
        },
}