import Header from "@/app/components/header";
import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";

function index() {
  return (
    <Flex bgColor={"black"} color={"white"} flexDirection={"column"} h="100vh">
      <Header />
      <Flex ml={10} flexDir="column">
        <Text fontWeight="bold" fontSize={41}>
          Sobre mim:
        </Text>
        <Flex gap={40}>
          <Flex flexDir="column" ml={10} w={600}>
            <Text>
              Sou desenvolvedor full stack localizado no interior do estado de
              são paulo-SP. Desenvolvi alguns projetos reais em empresas
              E-commerce e coloquei em prática algumas ideias momentâneas com
              fins de estudo de novas tecnologias.
            </Text>
            <Text mt={5}>
              O meu objetivo é sempre melhorar as minhas habilidades em
              desenvolvimento web e mobile.
            </Text>
            <Text mt={5}>
              Atualmente trabalho em uma agência de desenvolvimento E-commerce
              onde atuo em projetos React / React Native e NextJS.
            </Text>
          </Flex>
          <Flex flexDir="column" p={5} bgColor='#1a1a1a' borderRadius={10}>
            <Flex alignItems='center'>
              <Text>Estou aqui</Text>
              <HiArrowLongDown color="white" />
            </Flex>
            <Box mt={2}>
              <iframe
                width="400"
                height="400"
                src="https://maps.google.com/maps?width=400%25&amp;height=400&amp;q=marilia-sp&amp;output=embed"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default index;
