import { Button, Flex, Text } from "@chakra-ui/react"

const Navbar = () => {
    return <Flex w="full" py="7" px="10" justifyContent={"space-between"} alignItems={"center"}>
        <Text color="primary" fontWeight="bold">Fake Detector</Text>
        <Button colorPalette="cyan" size="xs" px="2">Get Extension</Button>
    </Flex>
}

export default Navbar