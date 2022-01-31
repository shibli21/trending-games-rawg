const baseUrl = "https://api.rawg.io/api/"

const currentYear = new Date().getFullYear()
const dayAndMonth = (type: string) => {
    let value: any
    if (type === "month") {
        value = new Date().getMonth() + 1
    } else if (type === "day") {
        value = new Date().getDate()
    }
    if (value < 10) {
        return `0${value}`
    } else {
        return value
    }
}

const currentMonth = dayAndMonth("month")
const currentDay = dayAndMonth("day")
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

const popularGames = (page: any) =>
    `games?dates=${lastYear},${currentDate}&ordering=rating_count&page_size=10&page=${page}`
const upcomingGames = (page: any) =>
    `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&page=${page}`
const searchedGames = (game_name: any, page: any) =>
    `games?search=${game_name}&ordering=rating_count&page_size=5&page=${page}`

export const popularGamesURL = (page: any) => baseUrl + popularGames(page)
export const upcomingGamesURL = (page: any) => baseUrl + upcomingGames(page)
export const searchedGamesURL = (game_name: any, page: any) =>
    baseUrl + searchedGames(game_name, page)
//Game Details
export const gameDetails = (id: any) => baseUrl + `games/${id}`
export const gameScreenshots = (id: any) => baseUrl + `games/${id}/screenshots`



export const fetchGames = async () => {
    const res = await fetch(`https://api.rawg.io/api/games?dates=${lastYear},${currentDate}&ordering=rating_count&page_size=16&key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const games: any = await res.json();


    return games
}

export const fetchGameDetails = async (id: string) => {
    const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const game: any = await res.json();

    return game;
}

export const fetchGameSS = async (id: string) => {
    const res = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const gameSS: any = await res.json();

    return gameSS;
}

export const fetchGameDLC = async (id: string) => {

    const res = await fetch(`https://api.rawg.io/api/games/${id}/additions?key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const gameDlc: any = await res.json();


    return gameDlc;
}

export const fetchGameTrailer = async (id: string) => {
    const res = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const gameTrailers: any = await res.json();


    return gameTrailers;
}

export const fetchGameReviews = async (id: string) => {
    const res = await fetch(`https://api.rawg.io/api/games/${id}/reviews?key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const gameReviews: any = await res.json();


    return gameReviews;
}

export const fetchSearchedGames = async (game_name: string) => {
    const res = await fetch(`https://api.rawg.io/api/games?search=${game_name}&ordering=rating_count&key=${process.env.NEXT_PUBLIC_API_KEY}`);
    const searchedGames: any = await res.json();


    return searchedGames;
}
