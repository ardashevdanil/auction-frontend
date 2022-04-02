import Link from "next/link";
import type { ItemCardProps } from "./item-card.types";

export function ItemCard(props: ItemCardProps) {
  const { title, timeLeft, maxBet, location, betCount, imageUrl, url } = props;

  return (
    <Link href={url}>
      <div className="flex flex-col relative overflow-hidden h-52 bg-white  rounded-md shadow-[0px_20px_24px_-4px_rgba(85,_105,_135,_0.04),_0px_8px_8px_-4px_rgba(85,_105,_135,_0.02)]">
        <div className="absolute top-1 right-1 bg-white py-1 px-[6px] text-[8px] leading-[8px] font-bold rounded-full">
          {timeLeft}
        </div>
        <div className="grow bg-emerald-400"></div>
        <div className="bg-white px-2 pt-2 pb-1">
          <h6 className="text-sm font-normal truncate">{title}</h6>
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold">{maxBet}</span>
            <span className="text-[8px] text-neutral-500">
              {betCount} ставок
            </span>
          </div>
          <div className="text-[8px] text-neutral-500">{location}</div>
        </div>
      </div>
    </Link>
  );
}
