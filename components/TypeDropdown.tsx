import * as types from "../types";
import { emojiForItemType } from "../utils";

interface Props {
  typeSelected: types.ItemTypes | "";
  changeHandler: (val: types.ItemTypes | "") => void;
};

const TypeDropdown: React.FC<Props> = ({
  typeSelected, changeHandler
}: Props): React.ReactElement => {
  return (
    <div className="space-y-1">
      <label className="block text-sm leading-5 font-medium text-gray-700">
        Filter by type
      </label>
      <select
        className="bg-white border h-8"
        value={typeSelected}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const valAsType = coerceItemTypeSelection(e.currentTarget.value);
          changeHandler(valAsType);
        }}
      >
        <option value="">--</option>
        <option value={types.ItemTypes.Article}>Article - {emojiForItemType(types.ItemTypes.Article)}</option>
        <option value={types.ItemTypes.Book}>Book - {emojiForItemType(types.ItemTypes.Book)}</option>
        <option value={types.ItemTypes.Movie}>Movie - {emojiForItemType(types.ItemTypes.Movie)}</option>
        <option value={types.ItemTypes.Music}>Music - {emojiForItemType(types.ItemTypes.Music)}</option>
      </select>
    </div>
  )

};

const coerceItemTypeSelection = (val: string): types.ItemTypes | "" => {
  switch (val) {
    case types.ItemTypes.Article:
      return types.ItemTypes.Article;
    case types.ItemTypes.Book:
      return types.ItemTypes.Book;
    case types.ItemTypes.Movie:
      return types.ItemTypes.Movie;
    case types.ItemTypes.Music:
      return types.ItemTypes.Music;
    default:
      return "";
  }
}

export default TypeDropdown;