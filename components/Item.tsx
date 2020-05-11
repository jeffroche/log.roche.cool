import * as types from "../types";

interface ItemProps {
  item: types.Item;
}

export default function Item({ item }: ItemProps) {
  return (
    <li>
      <div>
        <a href={item.link}>{item.name}</a>
      </div>
    </li>
  )
}