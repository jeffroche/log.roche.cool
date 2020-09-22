interface Props {
  yearSelected: string;
  changeHandler: (val: string) => void;
};

const YearDropdown: React.FC<Props> = ({
  yearSelected, changeHandler
}: Props): React.ReactElement => {
  const years = [];
  const startYear = new Date().getFullYear();
  const endYear = 2007;
  for (let year = startYear; year >= endYear; year--) {
    years.push(year);
  }
  const yearOptions = years.map((y: number) => (
    <option value={y.toString()} key={y}>{y}</option>
  ));
  return (
    <select value={yearSelected} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
      changeHandler(e.currentTarget.value);
    }}>
      <option value=""></option>
      {yearOptions}
    </select>
  )

};

export default YearDropdown;