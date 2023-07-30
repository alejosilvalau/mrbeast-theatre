import data from "../../data.json";

export async function fetchVideos(channelId, apiKey) {
	// return await fetch(
	// 	`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=100&order=searchSortUnspecified&key=${apiKey}`
	// )
	// 	.then((data) => data.json())
	// 	.then((list) => list.items);

	// copied response to avoid too many request
	return data.items;
}
