import AnimeCard from "@/components/AnimeCard";
import { fetchAnime } from "./action";
import Hero from "@/components/Hero";
import LoadMore from "@/components/LoadMore";

export default async function Home() {
  const data = await fetchAnime();

  return (
    <main className="bg-black px-[5rem]">
      <Hero />

      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        {data.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
      <LoadMore />
    </main>
  );
}
