"use client";
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";

function LoadMore() {
  const [page, setPage] = useState(2);

  const { ref, inView } = useInView();
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);

      const delay = 500;

      const timeoutId = setTimeout(() => {
        fetchAnime(page).then((res) => {
          setPage(page + 1);

          setData([...data, ...res]);
        });
        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);

  console.log(page);
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;
