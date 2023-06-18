import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";

function LeftIndexComp() {
  return (
    <Flex flexDir="column" >
      <Flex flexDir="column" p={10} maxW={550}>
        <Flex p={10} alignItems="center">
          <Image src="/tag.png" mr={5} w={58} h={30} />
          <Text fontWeight="bold" fontSize={22}>
            Desenvolvedor Full Stack Web & Mobile
          </Text>
        </Flex>
        <Flex
          ml={20}
          bgColor="gray.900"
          p={5}
          borderRadius={10}
          flexDir="column"
        >
          <Text textAlign="justify">
            Alguns projetos ou certas demandas podem parecer impossíveis, mais
            com algumas xícaras de café e muita determinação nada é impossível.
          </Text>
          <Text textAlign={"center"} mt={5}>
            Build(⚡) ▪️ Coffee(☕) ▪️ Debug(🐞) ▪️ Repeat(🔁)
          </Text>
        </Flex>
      </Flex>
      <Flex ml={10} mt={5} pb={20} gap={100}>
        <Box bgColor="#00C39A" w={100} h={100} borderRadius={10}>
          <Text fontWeight="bold" fontSize={22} textAlign="center" mt={4}>
            3+
          </Text>
          <Text textAlign="center" fontSize={12} fontWeight="bold">
            Years Experience
          </Text>
        </Box>
        <Box bgColor="#FFC03C" w={100} h={100} borderRadius={10}>
          <Text
            color="black"
            fontWeight="bold"
            fontSize={22}
            textAlign="center"
            mt={4}
          >
            15+
          </Text>
          <Text
            color="black"
            textAlign="center"
            fontSize={12}
            fontWeight="bold"
          >
            Handled Project
          </Text>
        </Box>
        <Box bgColor="#FE6D79" w={100} h={100} borderRadius={10}>
          <Text fontWeight="bold" fontSize={22} textAlign="center" mt={4}>
            2+
          </Text>
          <Text textAlign="center" fontSize={12} fontWeight="bold">
            Clients
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default LeftIndexComp;
