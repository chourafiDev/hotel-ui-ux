import { DatePickerWithRange } from "../ui/DatePickerWithRange";

const CheckInCheckOut = () => {
  return (
    <div className="w-full">
      <p className="text-slate-900 dark:text-white font-medium mb-1">
        Check-in and Check-out Date
      </p>
      <DatePickerWithRange />
    </div>
  );
};

export default CheckInCheckOut;
