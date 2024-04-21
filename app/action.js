export async function fetchAnime(page) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${8}&order=popularity`
  );
  const data = response.json();
  return data;
}

export async function fetchAnimeDetails(id) {
  const response = await fetch(`https://shikimori.one/api/animes/${id}`);
  const data = response.json();
  return data;
}

export async function fetchSimilarAnimies(id) {
  const response = await fetch(
    `https://shikimori.one/api/animes/${id}/similar`
  );
  const data = response.json();
  return data;
}

export async function fetchAnimieScreenshots(id) {
  const response = await fetch(
    `https://shikimori.one/api/animes/${id}/screenshots`
  );
  const data = response.json();
  return data;
}

export async function fetchAnimieExternalLinks(id) {
  const response = await fetch(
    `https://shikimori.one/api/animes/${id}/external_links`
  );
  const data = response.json();
  return data;
}
