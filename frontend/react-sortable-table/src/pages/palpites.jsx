import {
  Box,
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import PalpitesCard from "../components/PalpitesCard";
import matchesTable from "../data/matchesTable1.json";

const Palpites = ({ matches }) => {
  matches = matchesTable;

  let match1 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${1}`;
  });

  let match2 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${2}`;
  });
  let match3 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${3}`;
  });

  let match4 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${4}`;
  });
  let match5 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${5}`;
  });

  let match6 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${6}`;
  });
  let match7 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${7}`;
  });

  let match8 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${8}`;
  });
  let match9 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${9}`;
  });

  let match10 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${10}`;
  });
  let match11 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${11}`;
  });

  let match12 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${12}`;
  });
  let match13 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${13}`;
  });

  let match14 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${14}`;
  });
  let match15 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${15}`;
  });

  let match16 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${16}`;
  });
  let match17 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${17}`;
  });

  let match18 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${18}`;
  });
  let match19 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${19}`;
  });

  let match20 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${20}`;
  });
  let match21 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${21}`;
  });

  let match22 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${22}`;
  });
  let match23 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${23}`;
  });

  let match24 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${24}`;
  });
  let match25 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${25}`;
  });

  let match26 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${26}`;
  });
  let match27 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${27}`;
  });

  let match28 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${28}`;
  });
  let match29 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${29}`;
  });

  let match30 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${30}`;
  });
  let match31 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${31}`;
  });

  let match32 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${32}`;
  });
  let match33 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${33}`;
  });

  let match34 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${34}`;
  });
  let match35 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${35}`;
  });

  let match36 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${36}`;
  });
  let match37 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${37}`;
  });

  let match38 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${38}`;
  });
  let match39 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${39}`;
  });

  let match40 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${40}`;
  });
  let match41 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${41}`;
  });

  let match42 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${42}`;
  });
  let match43 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${43}`;
  });

  let match44 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${44}`;
  });
  let match45 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${45}`;
  });

  let match46 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${46}`;
  });
  let match47 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${47}`;
  });

  let match48 = matches.filter((jogo) => {
    return jogo.Jogo === `Jogo ${48}`;
  });

  const tab = matches.map((jogo) => {
    return <Tab>{jogo.id}</Tab>;
  });

  return (
    <Center>
      <Tabs
        isFitted
        variant={"soft-rounded"}
        colorScheme="blackAlpha"
        orientation="horizontal"
      >
        <Box>
          <Center>
            <TabList
              mt={"15px"}
              maxH={"70vh"}
              // overflowY={"scroll"}
              css={{
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
              }}
            >
              {tab}
            </TabList>
          </Center>
        </Box> 
        <TabPanels>
          <TabPanel>
            <PalpitesCard jogos={match1} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match2} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match3} />
          </TabPanel>
          {/* <TabPanel>
            <PalpitesCard jogos={match4} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match5} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match6} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match7} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match8} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match9} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match10} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match11} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match12} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match13} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match14} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match15} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match16} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match17} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match18} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match19} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match20} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match21} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match22} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match23} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match24} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match25} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match26} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match27} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match28} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match29} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match30} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match31} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match32} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match33} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match34} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match35} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match36} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match37} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match38} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match39} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match40} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match41} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match42} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match43} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match44} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match45} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match46} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match47} />
          </TabPanel>
          <TabPanel>
            <PalpitesCard jogos={match48} />
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </Center>
  );
};

export default Palpites;
