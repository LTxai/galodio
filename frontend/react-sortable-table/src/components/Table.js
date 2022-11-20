import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSortableTable } from "../useSortableTable";
import { Table, TableCaption, TableContainer, Text } from "@chakra-ui/react";

const BolodioTable = ({ data, columns }) => {
  const [tableData, handleSorting] = useSortableTable(data, columns);

  return (
    <TableContainer boxShadow={"dark-lg"} maxW={"350px"} maxH={'70vh'} overflowY={'scroll'} css={{
      "&::-webkit-scrollbar": {
        width: " 13px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#fec310",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#56042c",
        borderRadius: "10px",
        border: "0px none #c2c2c2",
      },
    }}>
      <Table variant={"striped"} colorScheme={"blackAlpha"}  >
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </Table>
    </TableContainer>
  );
};

export default BolodioTable;
