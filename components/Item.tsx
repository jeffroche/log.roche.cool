import ItemTimestamp from "./ItemTimestamp";
import ItemTypeIcon from "./ItemTypeIcon";
import * as types from "../types";

interface ItemProps {
  item: types.Item;
}

export default function Item({ item }: ItemProps) {
  return (
    <li>
      <div className="border-2 my-2">
        <div className="flex flex-row items-center justify-between border-b">
          <div className="m-1">
            <ItemTypeIcon postType={item.type} />
          </div>
          <div className="m-1">
            <ItemTimestamp ts={item.created} />
          </div>
        </div>
        {item.comment ?
          <div className="m-1">
            <div className="border-b">
              <a href={item.link}>{item.name}</a>
            </div>
            <div>
              {item.comment ? <div>{item.comment}</div> : null}
            </div>
          </div> :
          <div className="m-1">
            <div>
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