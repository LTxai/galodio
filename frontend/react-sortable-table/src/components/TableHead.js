import { Th, Thead, Tr } from "@chakra-ui/react";
import { useState } from "react";
const TableHead = ({ columns, handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("desc");

  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "desc" ? "asc" : "desc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };


  return (
    <Thead>
      <Tr>
        {columns.map(({ label, accessor, sortable }) => {
          const cl = sortable
            ? sortField === accessor && order === "asc"
              ? "up"
              : sortField === accessor && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <Th
              key={accessor}
              onClick={sortable ? () => handleSortingChange(accessor) : null}
              className={cl}
            >
              {label}
            </Th>
          );
        })}
      </Tr>
    </Thead>
  );
};

export default TableHead;
