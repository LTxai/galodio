import { Box, Center, ChakraProvider, Flex, Heading, Image, Kbd, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import BolodioTable from "./components/Table";
import tableData1 from "./data/tableData1.json";
import tableData2 from "./data/guessingTable";
import mascote from "./images/mascote_final_1.png"
import StyleColorMode from "./pages/DarkModeButton";
import Palpites from "./pages/palpites";

const columns = [
  { label: "Posição" },
  { label: "Nome", accessor: "name", sortable: false, sortbyOrder: "desc" },
  { label: "Pontos", accessor: "points", sortable: true, sortbyOrder: "desc" },
  { label: "Acertos", accessor: "guess", sortable: false, sortbyOrder: "desc"},
  { label: "Gols", accessor: "goals", sortable: false, sortbyOrder: "desc"},
];

const App = () => {
  return (
    <ChakraProvider>
      <Flex flexDir={"column"} h={'100vh'} overflowY={'scroll'}>
        <Center>
          <Image src={mascote} alt="Mascote Galodinho" zIndex={"-1"} w={"140px"} />
          <Heading my={"20px"} zIndex={"999"} ml={"-40px"}> Bolódio 2022</Heading>
          <Image src={mascote} alt="Mascote Galodinho" zIndex={"-1"} w={"140px"} ml={"-3%"} />
          <StyleColorMode />
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
          <Text>Ou seja, a pessoa que acerta o palpite ganha 9 pontos: 5 pontos do Acerto + 4 pontos dos gols</Text>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
