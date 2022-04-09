import { observer } from "mobx-react";
import { FixedSizeList } from "react-window";
import { useStore } from "@lib/hooks";
import { ItemCard, ITEM_CARD_HEIGHT } from "../../";
import { ItemsListProps } from "./items-list.types";

export const ItemsList = observer(function ItemsList(props: ItemsListProps) {
  const { height } = props;
  const store = useStore();

  return (
    <FixedSizeList
      itemData={store.itemsStore.items}
      height={height}
      className="py-4"
      width="100%"
      itemSize={ITEM_CARD_HEIGHT + 16}
      itemCount={14}
    >
      {({
        data,
        index,
        style,
      }: {
        data: any;
        index: number;
        style: Object;
      }) => (
        <div style={style} className="flex items-end">
          <ItemCard
            className="w-[calc(50%-6*4px)] ml-4 mr-2"
            title={data[index].attributes.title}
            timeLeft="21:25:14"
            maxBet={data[index].maxBet}
            location="Kirov"
            betCount={data[index].betCount}
            url="https://google.com"
            imageUrl={data[index].firstImageUrl}
          />
          {data[index + 1] && (
            <ItemCard
              className="w-[calc(50%-6*4px)] ml-2 mr-4"
              title={data[index + 1].attributes.title}
              timeLeft="21:25:14"
              maxBet={data[index + 1].maxBet}
              location="Kirov"
              betCount={data[index + 1].betCount}
              url="https://google.com"
              imageUrl={data[index + 1].firstImageUrl}
            />
          )}
        </div>
      )}
    </FixedSizeList>
  );
});
