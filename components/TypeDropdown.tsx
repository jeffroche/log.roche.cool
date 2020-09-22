import { type } from "os";
import * as types from "../types";

interface Props {
  typeSelected: types.ItemTypes | "";
  changeHandler: (val: types.ItemTypes | "") => void;
};

const TypeDropdown: React.FC<Props> = ({
  typeSelected, changeHandler
}: Props): React.ReactElement => {
  return (
    <select value={typeSelected} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
      const valAsType = coerceItemTypeSelection(e.currentTarget.value);
      changeHandler(valAsType);
    }}>
      <option value=""></option>
      <option value={types.ItemTypes.Article}>Article</option>
      <option value={types.ItemTypes.Book}>Book</option>
      <option value={types.ItemTypes.Movie}>Movie</option>
      <option value={types.ItemTypes.Music}>Music</option>
    </select>
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