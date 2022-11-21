import { Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import guessingTable from '../data/guessingTable.json'
const PalpitesBody = ({palpites, jogo}) => {

    palpites = guessingTable

    return (
        <Tbody>
            {jogo.map((palpite) => {
                return (
                    <Tr key={palpite.Id}>
                        <Td>{palpite.Nome}</Td>
                        <Td>{palpite.Placar}</Td>
                    </Tr>
                )
            })}
        </Tbody>
    )
}

export default PalpitesBody