export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Fw2qmJRPk5h1KKOxBp76388btMRNZL9x`;
  const { data: restData } = await fetch(url).then(resStream => resStream.json());
  const gifsData = restData.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }));
  return gifsData;
};
