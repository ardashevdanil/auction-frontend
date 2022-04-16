import { observer } from "mobx-react";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { useStore } from "@lib/hooks";
import { ItemCard, ITEM_CARD_HEIGHT } from "../../";
import { ItemsListProps } from "./items-list.types";

export const ItemsList = observer(function ItemsList(props: ItemsListProps) {
  const { height } = props;
  const { itemsStore } = useStore();
  const itemCount = Math.min(
    Math.ceil((itemsStore.items.length + itemsStore.pagination.pageSize) / 2),
    Math.ceil(itemsStore.pagination.total / 2)
  );

  const handleLoad = async () => {
    itemsStore.pagination.incPage();
    await itemsStore.fetchItems();
  };

  return (
    <InfiniteLoader
      isItemLoaded={(startIndex: number, stopIndex: number) =>
        itemsStore.items[stopIndex]
      }
      itemCount={itemCount}
      loadMoreItems={handleLoad}
    >
      {({ onItemsRendered, ref }: any) => (
        <FixedSizeList
          onItemsRendered={onItemsRendered}
          ref={ref}
          itemData={itemsStore.items}
          height={height}
          className="py-4"
          width="100%"
          itemSize={ITEM_CARD_HEIGHT + 16}
          itemCount={itemCount}
        >
          {({
            data,
            index,
            style,
          }: {
            data: any;
            index: number;
            style: Object;
          }) => {
            if (index >= data.length / 2) {
              return null;
            }

            const firstItem = data[index * 2];
            const secondItem = data[index * 2 + 1];

            return (
              <div style={style} className="flex items-end">
                <ItemCard
                  className="w-[calc(50%-6*4px)] ml-4 mr-2"
                  title={firstItem.attributes.title}
                  timeLeft="21:25:14"
                  maxBet={firstItem.maxBet}
                  location="Kirov"
                  betCount={firstItem.betCount}
                  url="https://google.com"
                  imageUrl={firstItem.firstImageUrl}
                />
                {secondItem && (
                  <ItemCard
                    className="w-[calc(50%-6*4px)] ml-2 mr-4"
                    title={secondItem.attributes.title}
                    timeLeft="21:25:14"
                    maxBet={secondItem.maxBet}
                    location="Kirov"
                    betCount={secondItem.betCount}
                    url="https://google.com"
                    imageUrl={secondItem.firstImageUrl}
                  />
                )}
              </div>
            );
          }}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
});
