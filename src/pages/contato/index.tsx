import Header from "@/app/components/header";
import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

function index() {
  return (
    <Flex bgColor={"black"} color={"white"} flexDirection={"column"} h="100vh">
      <Header />
      <Flex ml={10} flexDir="column">
        <Text fontWeight="bold" fontSize={41}>
          Contatos
        </Text>
        <Flex flexDir="column" ml={10}>
          <Flex>
            <Text fontWeight="bold">Você pode</Text>
            <Text fontWeight="bold" ml={1} color="#8325FD">
              me
            </Text>
            <Text fontWeight="bold" ml={1}>
              encontrar em;
            </Text>
          </Flex>

          <Flex flexDir="column" mt={5}>
            {/* https://www.linkedin.com/in/matheus-farias-ribeiro-a8a8351a3/ */}
            <Flex alignItems="center">
              <Image src="/linkedin.png" h={31} w={31} alt="linkedin" />
              <Link
                href={
                  "https://www.linkedin.com/in/matheus-farias-ribeiro-a8a8351a3/"
                }
                target="_blank"
              >
                <Text ml={1}>/matheus-farias-ribeiro</Text>
              </Link>
            </Flex>

            {/* https://github.com/matheusky */}
            <Flex alignItems="center" mt={5}>
              <Image src="/github.png" h={31} w={31} alt="github" />
              <Link href={"https://github.com/matheusky"} target="_blank">
                <Text ml={1}>/Matheusky</Text>
              </Link>
            </Flex>

            {/* <Flex alignItems="center">
              <Image src="/email.png" h={31} w={31} />
              <Text ml={2}>/matheus-ribeiro</Text>
            </Flex> */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default index;
