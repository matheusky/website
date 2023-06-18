import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import React from "react";

export default function Header() {
  return (
    <>
      <Head>
        <title>Matheus Ribeiro - Portfolio</title>
      </Head>
      <Flex justifyContent="space-between">
        <Flex p={10} h={25} flexDir={"row"} alignItems={"center"}>
          <Link href={"/"}>
            <Text w={20}>Matheus Ribeiro</Text>
          </Link>
          <Box w={20} h={0.1} bg={"gray"} />
          <Link href={""}>
            <Text ml={5} color={"#fff"}>
              Portfolio
            </Text>
          </Link>
          <Link href={""}>
            <Text ml={5} color={"#fff"}>
              Sobre
            </Text>
          </Link>
          <Link href={"/contato"}>
            <Text ml={5} color={"#fff"}>
              Contatos
            </Text>
          </Link>
        </Flex>

        <Box
          bg={"#00C39A"}
          w={5}
          h={5}
          justifyContent={"end"}
          style={{ borderLeft: 25, borderRight: 25, borderBottom: 50 }}
        />
      </Flex>
    </>
  );
}

// borderLeft: 25px,
// borderRight: 25px,
// borderBottom: 50px
