import "whatwg-fetch";

export function fetchVideos(channelId: string) {
	const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}`;
	return fetch(url).then(
		(response: {
			ok: any;
			json: () => any;
			statusText: string | undefined;
		}) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(response.statusText);
			}
		}
	);
}
