import { Box, CardHeader, Center, Flex, Heading, Image, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Tooltip } from "@chakra-ui/react"

const PalpitesCardHeader = ({ props }) => {

    return (
        <CardHeader>
            {props.map((team) => {
                return (
                    <Flex flexDir={'column'}>
                        <Heading size={'md'} textTransform={'uppercase'} mb={'13'}>{team.Jogo}</Heading>
                        <Flex flexDir={'column'} >
                            <Center>
                                <Flex>
                                    <Popover>
                                        <PopoverTrigger>
                                            <Image borderRadius={"5px"} src={team.LOGO_1} maxW={"80px"} maxH={"53.3px"} mr={"20px"} />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverHeader>{team.TIME_1}</PopoverHeader>
                                        </PopoverContent>
                                    </Popover>
                                    <Heading>X</Heading>
                                    <Popover>
                                        <PopoverTrigger>
                                            <Image borderRadius={"5px"} ml={'20px'} src={team.LOGO_2} maxW={"80px"} maxH={"53.3px"} />
                                        </PopoverTrigger>
                                        <PopoverContent clos>
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverHeader>{team.TIME_2}</PopoverHeader>
                                        </PopoverContent>
                                    </Popover>
                                </Flex>
                            </Center>
                            <Box>
                                <Center mt={'4'}>
                                    <Heading size={'md'} textTransform='uppercase'>Placar final: {team.GOLS_TIME_1} x {team.GOLS_TIME_2}</Heading>
                                </Center>
                            </Box>
                        </Flex>
                    </Flex>)
            })}
        </CardHeader>
    )
}

export default PalpitesCardHeader;