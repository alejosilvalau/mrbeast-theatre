// TODO: Make only fetch the video once, then get a random video that is different from the previous one

export async function fetchVideos(playListId: string, apiKey: string) {
	return await fetch(
		`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${playListId}&maxResults=25&key=${apiKey}`
	)
		.then((data) => data.json())
		.then((list) => list.items);
}

//
