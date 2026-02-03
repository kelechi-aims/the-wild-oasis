import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "all" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With-discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sory by name (A-Z)" },
          { value: "name-desc", label: "Sory by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sory by price (low first)" },
          { value: "regularPrice-desc", label: "Sory by price (high first)" },
          { value: "maxCapacity-asc", label: "Sory by capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sory by capacity (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
