import Item from "./Item";
import * as types from "../types";

interface ItemListProps {
  items: types.Item[];
}

export default function ItemList({ items }: ItemListProps) {
  const itemElements = items.map(i => <Item key={i.id} item={i} />);
  return (
    <ul>
      {itemElements}
    </ul>
  )
}