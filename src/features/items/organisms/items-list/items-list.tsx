import { observer } from "mobx-react";
import { useStore } from "@lib/hooks";
import { ItemCard } from "../../";

export const ItemsList = observer(function ItemsList() {
  const store = useStore();

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {store.itemsStore.items.map((item) => (
        <ItemCard
          key={item.id}
          title={item.title}
          timeLeft="21:25:14"
          maxBet={item.startBet}
          location="Kirov"
          betCount={12}
          url="https://google.com"
          imageUrl="/"
        />
      ))}
    </div>
  );
});
