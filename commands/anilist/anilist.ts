import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import axios from 'axios';

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
                        //.setAutocomplete(true)
                    )
                )
                .addSubcommand(subcommand =>
                    subcommand.setName('manga')
                    .setDescription('Search for the given manga')
                    .addStringOption(option => 
                        option.setName('title')
                        .setDescription('Start typing to autocomplete search results')
                        .setRequired(true)
                        //.setAutocomplete(true)
                    )
                )
        ).addSubcommand(subcommand =>
            subcommand.setName('airing')
            .setDescription('Get the list of anime airing in specified season (default current season)')
            .addStringOption(option =>
                option.setName('season')
                .setDescription('Which season to get airing anime of (default current)')
                .addChoices(
                    {name: 'Winter', value: 'Winter'},
                    {name: 'Spring', value: 'Spring'},
                    {name: 'Summer', value: 'Summer'},
                    {name: 'Fall', value: 'Fall'},
                )
                .setRequired(false)
            ).addIntegerOption(option =>
                option.setName('year')
                .setDescription('The optional year to get the airing anime of (default current)')
                //.setAutocomplete(true)
            ).addStringOption(option =>
                option.setName('sort')
                .setDescription('Optional metric to sort results by')
                .setRequired(false)
                .addChoices(
                    {name: 'Title', value: 'Title'},
                    {name: 'Popularity', value: 'Popularity'},
                    {name: 'Average Score', value: 'Average Score'},
                    {name: 'Trending', value: 'Trending'},
                    {name: 'Favorites', value: 'Favorites'},
                    {name: 'Date Added', value: 'Date Added'},
                    {name: 'Release Date', value: 'Release Date'},
                ))
            ), 
        

        async execute(interaction: ChatInputCommandInteraction) {
            await interaction.reply('anilist')
            let graphql = axios.get('https://graphql.anilist.co');
            console.log(graphql);
            console.log(`User ${interaction.user.tag} used command ${interaction}`);
        },
}