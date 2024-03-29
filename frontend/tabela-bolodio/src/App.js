import { Box, Center, ChakraProvider, Flex, Heading, Image, Kbd, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import BolodioTable from "./components/Table";
import tableData1 from "./data/tableData1.json";
import mascote from "./images/mascote_final_1.png"
import Palpites from "./pages/palpites";

const columns = [
  { label: "Posição" },
  { label: "Nome", accessor: "name", sortable: false },
  { label: "Pontos", accessor: "points", sortable: true },
  { label: "Acertos", accessor: "guess", sortable: false, sortbyOrder: "desc" },
  { label: "Gols", accessor: "goals1", sortable: false }
];

const App = () => {
  return (
    <ChakraProvider>
      <Flex flexDir={"column"} h={'100vh'} overflowY={'scroll'}>
        <Center>
          <Image src={mascote} alt="Mascote Galodinho" zIndex={"-1"} w={"140px"} />
          <Heading my={"20px"} zIndex={"999"} ml={"-40px"}> Bolódio 2022</Heading>
          <Image src={mascote} alt="Mascote Galodinho" zIndex={"-1"} w={"140px"} ml={"-3%"} />
        </Center>
        <Center>
          <Kbd mb={"20px"}>Edição especial Copa do Mundo</Kbd>
        </Center>
        <Tabs variant={'enclosed'}>
          <Center>
            <TabList>
              <Tab>Classificação</Tab>
              <Tab>Palpites</Tab>
            </TabList>
          </Center>

          <TabPanels>
            <TabPanel>
              <Center>
                <BolodioTable
                  data={tableData1}
                  columns={columns}
                />
              </Center>
            </TabPanel>
            <TabPanel>
              <Palpites/>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Flex alignSelf={'center'} flexDir={'column'} maxW={"350px"}>
          <Text fontWeight={"extrabold"}>Como funciona:</Text>
          <Text>"Acertos" é o número de palpites que a pessoa acertou, e "Gols" é o número de gols (por seleção) que a pessoa acertou.</Text>
          <Text>Cada Acerto vale 5 pontos, cada Gol vale 2.</Text>
          <Text> Ou seja, a pessoa que acerta o palpite ganha 9 pontos: 5 pontos do Acerto + 4 pontos dos gols</Text>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
