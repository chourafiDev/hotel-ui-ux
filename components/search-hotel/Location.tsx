import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPointIcon } from "@/lib/assets";

const Location = () => {
  return (
    <div className="w-full">
      <p className="text-slate-900 dark:text-white font-medium mb-1">
        Location
      </p>

      <Select>
        <SelectTrigger className="w-full h-11 bg-gray-100">
          <div className="flex items-center gap-1">
            <MapPointIcon className="size-4 text-slate-500" />
            <SelectValue placeholder="Find location" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Marrakech">Marrakech</SelectItem>
          <SelectItem value="Casablanca">Casablanca</SelectItem>
          <SelectItem value="Rabat">Rabat</SelectItem>
          <SelectItem value="Tangier">Tangier</SelectItem>
          <SelectItem value="Essaouira">Essaouira</SelectItem>
          <SelectItem value="Agadir">Agadir</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Location;
