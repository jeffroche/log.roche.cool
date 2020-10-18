import ItemTimestamp from "./ItemTimestamp";
import ItemEmoji from "./ItemEmoji";
import * as types from "../types";
import { emojiForItemType } from "../utils";

interface ItemProps {
  item: types.Item;
}

export default function Item({ item }: ItemProps) {
  return (
    <li>
      <div className="item my-2 px-2">
        <div className="flex flex-row items-center justify-between">
          <div className="m-1">
            <ItemTimestamp ts={item.created} />
          </div>
        </div>
        {item.comment ?
          <div className="m-1">
            <div className="border-b">
              <ItemEmoji itemType={item.type} /><a href={item.link}>{item.name}</a>
            </div>
            <div>
              {item.comment ? <div>{item.comment}</div> : null}
            </div>
          </div> :
          <div className="m-1">
            <div>
              <ItemEmoji itemType={item.type} />
              {item.link ?
                <a href={item.link}>{item.name}</a> :
                <span>{item.name}</span>
              }
            </div>
          </div>
        }
      </div>
    </li>
  )
}