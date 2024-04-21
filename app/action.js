export async function fetchAnime(page) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${8}&order=popularity`
  );
  const data = response.json();
  return data;
}
