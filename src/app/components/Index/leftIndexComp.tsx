import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";

function LeftIndexComp() {
  return (
    <Flex flexDir="column">
      <Flex flexDir="column" p={10} maxW={550}>
        <Flex p={10} alignItems="center">
          <Image src="/tag.png" mr={5} w={58} h={30} alt="tag" />
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
        <Flex
          bgColor="#00C39A"
          w={100}
          h={100}
          borderRadius={10}
          flexDir="column"
          justifyContent="center"
        >
          <Text fontWeight="bold" fontSize={22} textAlign="center">
            3+
          </Text>
          <Text textAlign="center" fontSize={12} fontWeight="bold">
            Years Experience
          </Text>
        </Flex>
        <Flex
          bgColor="#FFC03C"
          w={100}
          h={100}
          borderRadius={10}
          flexDir="column"
          justifyContent="center"
        >
          <Text
            color="black"
            fontWeight="bold"
            fontSize={22}
            textAlign="center"
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
        </Flex>
        <Flex
          bgColor="#FE6D79"
          w={100}
          h={100}
          borderRadius={10}
          flexDir="column"
          justifyContent="center"
        >
          <Text fontWeight="bold" fontSize={22} textAlign="center">
            2+
          </Text>
          <Text textAlign="center" fontSize={12} fontWeight="bold">
            Clients
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default LeftIndexComp;
