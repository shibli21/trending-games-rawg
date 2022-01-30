export const getGenres = (genres: any[]) => {
    let genresFormatted: any[] = [];

    genres.forEach((p) => {
        genresFormatted.push(p.name);
    });

    return genresFormatted.join(", ");
};
export const getPublishers = (publishers: any[]) => {
    let publishersFormatted: any[] = [];

    publishers.forEach((p) => {
        publishersFormatted.push(p.name);
    });

    return publishersFormatted.join(", ");
};
export const getPlatform = (platforms: any[]) => {
    let platformsFormatted: any[] = [];

    platforms.forEach((platform: { platform: { name: any } }) => {
        platformsFormatted.push(platform.platform.name);
    });

    return platformsFormatted.join(", ");
};
