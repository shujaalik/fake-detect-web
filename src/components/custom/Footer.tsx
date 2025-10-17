import { Box, Flex, Text } from "@chakra-ui/react"

const Footer = () => {
    return <Box borderTop="1px solid #edf2f720">
        <Flex w="full" px="5" py="4" justifyContent={"space-between"} alignItems="center" flexDirection={["column", "row"]} gap={2}>
            <Text opacity="0.9" fontSize="sm">
                © {new Date().getFullYear()} - All rights reserved.
            </Text>
            <Text opacity="0.9" fontSize="sm">
                Designed and developed in Iqra University.
            </Text>
        </Flex>
    </Box>
}

export default Footer