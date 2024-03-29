import { Tbody, Td, Tr } from "@chakra-ui/react";

const TableBody = ({ tableData, columns }) => {
  return (
    <Tbody>
      {tableData.map((data, index) => {
        // console.log(data)
        data.points = data.guess * 5 + data.goals * 2;
        data.position = index + 1
        return (
          <Tr key={data.id}>
            {columns.map(({ accessor }, index) => {
              const tData = data[accessor] ? data[accessor] : 0;
              return <Td textAlign={"center"} key={accessor}>{index !== 0 ? tData : data.position}</Td>;
            })}
          </Tr>
        );
      })}

    </Tbody>
  );
};

export default TableBody;
