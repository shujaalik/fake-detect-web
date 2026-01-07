import { Button, Flex, Image } from "@chakra-ui/react"
import logo from "../../assets/logo.jpg"

const Navbar = () => {
    return <Flex w="full" py="7" px="10" justifyContent={"space-between"} alignItems={"center"}>
        <Image
            src={logo}
            alt="Fake Detector Logo"
            h="10"
            border="1px solid"
            borderColor="gray.700"
            borderRadius="lg"
        />
        <Button color="white" backgroundColor="#194de7" _hover={{
            backgroundColor: "#163ed1"
        }} size="xs" px="2">Get Extension</Button>
    </Flex>
}

export default Navbar