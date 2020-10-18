import ItemComment from './ItemComment';
import ItemEmoji from "./ItemEmoji";
import ItemTimestamp from "./ItemTimestamp";
import * as types from "../types";

interface ItemProps {
  item: types.Item;
}

export default function Item({ item }: ItemProps) {
  return (
    <li>
      <div className="item my-2 sm:px-1">
        <div className="flex flex-row items-center justify-between">
          <div className="m-1">
            <ItemTimestamp ts={item.created} />
          </div>
        </div>
        {item.comment ?
          <div className="m-1">
            <ItemEmoji itemType={item.type} /><a href={item.link}>{item.name}</a>
            <ItemComment comment={item.comment} />
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