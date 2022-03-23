import { Image } from "@ui";
import { useCountdown } from "@lib/hooks";
import { ButtonContained } from "@ui";
import { Typography } from "@ui";

import type { ItemCardProps } from "./item-card.types";

export function ItemCard(props: ItemCardProps) {
  const [countdown] = useCountdown(props.end_date);
  return (
    <div className="w-full px-2 py-2 sm:w-1/2 lg:w-1/3">
      <div className="h-[360px] rounded-md border border-black flex flex-col">
        <div className="relative w-full h-[240px]">
          <Image src={props.image_url} layout="fill" />
        </div>
        <div className="w-full grow px-3 py-2">
          <h3 className="text-lg font-semibold mb-4">
            <Typography.H5>{props.title}</Typography.H5>
            <span className="text-xs text-gray-500 block">{countdown}</span>
          </h3>
          <div className="flex flex-row justify-between">
            <div>
              <div className="text-xl text-gray-400">
                {props.last_bet} {props.currency}
              </div>
              <span className="text-xs">Ставок: {props.bet_count}</span>
            </div>
            <div>
              <ButtonContained>Перейти</ButtonContained>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
