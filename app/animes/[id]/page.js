import {
  fetchAnimeDetails,
  fetchAnimieExternalLinks,
  fetchAnimieScreenshots,
  fetchSimilarAnimies,
} from "@/app/action";
import AnimeCard from "@/components/AnimeCard";
import Image from "next/image";
import Link from "next/link";

async function Animes({ params }) {
  const data = await fetchAnimeDetails(params.id);

  const similarData = await fetchSimilarAnimies(params.id);
  const screenShots = await fetchAnimieScreenshots(params.id);
  const externalLinks = await fetchAnimieExternalLinks(params.id);

  return (
    <div className="pt-[5rem] px-[7.25rem]">
      <div className="flex flex-col md:flex-row justify-between gap-[5rem] items-center">
        <div className="relative w-full">
          <Image
            src={`https://shikimori.one${data.image.original}`}
            alt={data.name}
            height={500}
            width={500}
            className="rounded-xl"
          />
        </div>
        <div className="">
          <h1 className="font-bol text-[3rem]">{data.name}</h1>
          <p className="pt-[2rem]">{data.description}</p>
          <div className="flex mt-[1rem] gap-2 flex-wrap ">
            {externalLinks.slice(0, 8).map((externalData, index) => (
              <Link
                className="bg-black text-white p-3 hover:bg-gray-800"
                target="_blank"
                href={externalData.url}
                key={index}
              >
                {externalData.kind}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-[1rem] gap-2 flex-wrap">
        {screenShots.slice(0, 8).map((imageData, index) => (
          <Image
            src={`https://shikimori.one${imageData.original}`}
            alt={data.name}
            height={100}
            width={100}
            className=""
            key={index}
          />
        ))}
      </div>

      <hr />
      <h1 className="font-bold bg-black text-white w-fit p-3 mt-[2rem]">
        Similar Anime
      </h1>
      <div className="flex justify-between flex-wrap pt-[2rem]">
        {similarData.slice(0, 4).map((item) => (
          <AnimeCard anime={item} />
        ))}
      </div>
    </div>
  );
}

export default Animes;
