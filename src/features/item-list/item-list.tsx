import { ItemCardMock } from "features/item-card/item-card.mock";
import { ItemCard } from "features/item-card";

export function ItemList() {
  return (
    <div className="flex flex-row flex-wrap py-4">
      {new Array(12).fill(ItemCardMock).map((i, idx) => (
        <ItemCard {...i} key={idx} />
      ))}
    </div>
  );
}
