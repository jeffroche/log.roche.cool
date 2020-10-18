import * as types from "../types";
import { emojiForItemType } from "../utils";

interface Props {
  itemType: types.ItemTypes;
}

export default function ItemEmoji({ itemType }: Props) {
  return <span className="pr-2">{emojiForItemType(itemType)}</span>
}