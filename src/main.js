const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCsPVYNJKlMnAdQyGe1CdgBA&part=snippet%2Cid&order=date&maxResults=9';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c1fe44889amsh8a02d81f1dc310dp1293c2jsn89c4891a2314',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const contentWrapper = null || document.getElementById('content')

async function fetchData(url){
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  try{
    const videos = await fetchData(API)
    let view = `
      ${videos.items.map(video => `
        <div class="group relative">
          <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video?.snippet?.thumbnails?.high?.url}" alt="${video?.snippet?.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video?.snippet?.title}
            </h3>
          </div>
        </div>
      `).slice(0, 4).join('')}
    `
    contentWrapper.innerHTML = view
  }catch (err){
    console.error(err)
  }
})()
