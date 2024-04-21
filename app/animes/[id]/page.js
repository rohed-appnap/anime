import {
  fetchAnimeDetails,
  fetchAnimieExternalLinks,
  fetchAnimieScreenshots,
  fetchAnimieVideos,
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
  const videoUrl = await fetchAnimieVideos(params.id);

  return (
    <div className="pt-[3rem] px-[1.25rem] md:px-[3.25rem] lg:px-[7.25rem]">
      <div className="flex flex-col md:flex-row justify-between gap-[2rem] pb-[2rem] ">
        <div className="flex gap-2">
          <div className="flex flex-col mt-[1rem] gap-2 flex-wrap">
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
          <div className="w-full">
            <Image
              src={`https://shikimori.one${data.image.original}`}
              alt={data.name}
              height={500}
              width={500}
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="w-full md:w-[70%]">
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

          <div className="flex mt-[1rem] gap-2 flex-wrap">
            {videoUrl.slice(0, 1).map((video, index) => (
              <iframe
                className="rounded-lg w-full md:w-[60%]"
                src={video.player_url}
                height="380"
                style={{ border: 0 }}
                allow="fullscreen"
                loading="lazy"
                role="presentation"
                key={index}
              ></iframe>
            ))}
          </div>
        </div>
      </div>

      <hr />
      <h1 className="font-bold bg-black text-white w-fit p-3 mt-[2rem]">
        Similar Anime
      </h1>
      <div className="flex justify-between flex-wrap pt-[2rem]">
        {similarData.slice(0, 4).map((item, index) => (
          <AnimeCard anime={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Animes;
