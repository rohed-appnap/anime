import { fetchAnimeDetails, fetchSimilarAnimies } from "@/app/action";
import AnimeCard from "@/components/AnimeCard";
import Image from "next/image";

async function Animes({ params }) {
  const data = await fetchAnimeDetails(params.id);

  const similarData = await fetchSimilarAnimies(params.id);

  return (
    <div className="pt-[5rem] px-[7.25rem]">
      <div className="flex justify-between gap-[5rem] items-center">
        <div className="relative w-full ">
          <Image
            src={`https://shikimori.one${data.image.original}`}
            alt={data.name}
            height={500}
            width={500}
            className="rounded-xl"
          />
        </div>
        <div>
          <h1 className="font-bol text-[3rem]">{data.name}</h1>
          <p className="pt-[2rem]">{data.description}</p>
        </div>
      </div>
      <hr />
      <h1 className="font-bold bg-black text-white w-fit p-3 mt-[2rem]">
        Similar Anime
      </h1>
      <div className="flex justify-between flex-wrap pt-[2rem]">
        {similarData.map((item) => (
          <AnimeCard anime={item} />
        ))}{" "}
      </div>
    </div>
  );
}

export default Animes;
