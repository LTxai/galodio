import { Box, Card, CardBody, Center, Stack, StackDivider, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import PalpitesBody from "./PalpitesBody"
import PalpitesCardHeader from "./PalpitesCardHeader"


const PalpitesCard = ({ jogos }) => {

    return (
        <Center bgColor={'blackAlpha.300'} boxShadow={"dark-lg"}>
            <Card w={"320px"} textAlign='center' maxH={"70vh"} overflowY={'scroll'} css={{
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
                <PalpitesCardHeader props={jogos} />
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <TableContainer>
                                <Table variant={'striped'} colorScheme={'blackAlpha'}>
                                    <Thead>
                                        <Tr>
                                            <Th>Galodier</Th>
                                            <Th>Palpite</Th>
                                        </Tr>
                                    </Thead>
                                    <PalpitesBody />
                                </Table>
                            </TableContainer>
                        </Box>
                    </Stack>
                </CardBody>


            </Card>
        </Center>
    )
}

export default PalpitesCard