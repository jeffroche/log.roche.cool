import ItemTimestamp from "./ItemTimestamp";
import ItemTypeIcon from "./ItemTypeIcon";
import * as types from "../types";

interface ItemProps {
  item: types.Item;
}

export default function Item({ item }: ItemProps) {
  return (
    <li>
      <div className="post">
        <div className="post-header">
          <div>
            <ItemTypeIcon postType={item.type} />
          </div>
          <div>
            <ItemTimestamp ts={item.created} />
          </div>
        </div>
        <div>
          <a href={item.link}>{item.name}</a>
          {item.comment ? <div>{item.comment}</div> : null}
        </div>
      </div>
      <style jsx>{`
      .post {
        display: flex;
        flex-direction: column;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        border-style: solid;
        border-width: 1px;
        border-color: #a0aec0;
        color: #1a202c;
      }
      .post-header {
        height: 5px;
        display: flex;
        flex-direction: row;
      }
      svg {
        fill: current;
      }
      `}</style>
    </li>
  )
}