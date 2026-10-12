export async function GET() {
    const apiKey = process.env.LASTFM_API_KEY;
    const lastfmAccount = process.env.LASTFM_ACCOUNT_NAME;

    if (!apiKey || !lastfmAccount) {
        return Response.json({ error: "Missing API credentials" }, { status: 500 });
    }

    const limit = 5;
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfmAccount}&api_key=${apiKey}&format=json&limit=${limit}`;

    try {
        const response = await fetch(url);
        const data: any = await response.json();

        const tracks = (data.recenttracks?.track || []).map((track: any) => ({
            name: track.name,
            artist: (track.artist?.["#text"] as string) || "Unknown",
            album: (track.album?.["#text"] as string) || null,
            url: track.url,
            image: (track.image?.[3]?.["$value"] as string) || (track.image?.[2]?.["$value"] as string) || null,
            nowPlaying: track["@attr"]?.nowplaying === "true",
        }));

        return Response.json({ tracks });
    } catch {
        return Response.json({ error: "Failed to fetch tracks" }, { status: 500 });
    }
}
