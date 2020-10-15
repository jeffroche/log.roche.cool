interface Props {
  yearSelected: string;
  changeHandler: (val: string) => void;
};

const YearDropdown: React.FC<Props> = ({
  yearSelected, changeHandler
}: Props): React.ReactElement => {
  const years = [];
  const startYear = new Date().getFullYear();
  const endYear = 2010;
  for (let year = startYear; year >= endYear; year--) {
    years.push(year);
  }
  const yearOptions = years.map((y: number) => (
    <option value={y.toString()} key={y}>{y}</option>
  ));
  return (
    <div className="space-y-1">
      <label className="block text-sm leading-5 font-medium text-gray-700">
        Filter by year
      </label>
      <select
        className="bg-green-100 border h-8"
        value={yearSelected}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          changeHandler(e.currentTarget.value);
        }}
      >
        <option value="">--</option>
        {yearOptions}
      </select>
    </div>
  )

};

export default YearDropdown;