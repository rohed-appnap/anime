import AnimeCard from "@/components/AnimeCard";
import { fetchAnime } from "./action";
import Hero from "@/components/Hero";
import LoadMore from "@/components/LoadMore";

export default async function Home() {
  const data = await fetchAnime();

  return (
    <main className="px-[7.25rem]">
      <Hero />
      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        {data.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
      {/* <LoadMore /> */}
      <div id="test1" className="bg-black h-[30rem]"></div>

      <div id="test2" className="h-[30rem] border mt-[5rem]"></div>
    </main>
  );
}
