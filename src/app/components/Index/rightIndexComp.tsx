import React, { useState } from "react";
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";

function RightIndexComp() {
  const [blink, setBlink] = useState(true);

  // setInterval(() => {
  //   setBlink(!blink);
  // }, 2000);

  return (
    <Flex
      flexDir="column"
      borderRadius={10}
      borderWidth={1}
      borderColor="white"
      bgColor="#191919"
      p={5}
      w={700}
      h={470}
    >
      <Text>{"Project > index.tsx"}</Text>
      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">1</Text>
        <Text textColor="#8325FD" ml={10}>
          Import
        </Text>
        <Text textColor="#FFC03C" ml={1}>
          {"{ Curriculo }"}
        </Text>
        <Text textColor="#8325FD" ml={1}>
          From
        </Text>
        <Text textColor="#00C39A" ml={1}>
          {'"./Project/Resume"'}
        </Text>
      </Flex>
      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">2</Text>
      </Flex>

      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">3</Text>
        <Text textColor="#8325FD" ml={10}>
          const
        </Text>
        <Text textColor="#b57cfe" ml={1}>
          User
        </Text>
        <Text textColor="#8325FD" ml={1}>
          =
        </Text>
        <Text textColor="white" ml={1}>
          {'"Matheus Ribeiro"'}
        </Text>
      </Flex>

      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">4</Text>
      </Flex>

      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">3</Text>
        <Text textColor="#8325FD" ml={10}>
          const
        </Text>
        <Text textColor="#b57cfe" ml={1}>
          Experience
        </Text>
        <Text textColor="#8325FD" ml={1}>
          =
        </Text>
        <Text textColor="white" ml={1}>
          {'"Desenvolvedor Full Stack | React | React Native | NextJS"'}
        </Text>
      </Flex>

      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">5</Text>
      </Flex>

      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">6</Text>
        <Text textColor="#8325FD" ml={10}>
          const
        </Text>
        <Text textColor="#b57cfe" ml={1}>
          Page
        </Text>
        <Text textColor="#8325FD" ml={1}>
          =
        </Text>
        <Text textColor="#FFC03C" ml={1}>
          {"Curriculo.showPerfil("}
        </Text>
        <Text textColor="#8325FD" ml={1}>
          {"{"}
        </Text>
        <Text textColor="#00C39A" ml={1}>
          User
        </Text>
        <Text textColor="#8325FD" ml={1}>
          ,
        </Text>
        <Text textColor="#00C39A" ml={1}>
          Experience
        </Text>
        <Text textColor="#8325FD" ml={1}>
          {"}"}
        </Text>
        <Text textColor="#FFC03C" ml={1}>
          {")"}
        </Text>
      </Flex>

      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">7</Text>
      </Flex>

      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">8</Text>
        <Text textColor="#FFC03C" ml={10}>
          Page
        </Text>
        <Text textColor="#8325FD" ml={0}>
          {"."}
        </Text>
        <Menu>
          <MenuButton>
            <Flex>
              <Text textColor="#b57cfe" ml={0}>
                {"open()"}
              </Text>{" "}
              <Text
                textColor={blink ? "#42137f" : "#191919"}
                fontWeight="bold"
                ml={1}
                style={{
                  transition: "all 0.5s ease-in",
                }}
              >
                ?
              </Text>
            </Flex>
          </MenuButton>
          <MenuList bgColor="#191919" borderColor="#191919">
            <MenuItem
              bgColor="#191919"
              borderRadius={10}
              w={100}
              _hover={{ backgroundColor: "black" }}
              textColor="#FFC03C"
            >
              {".Portfolio()"}
            </MenuItem>
            <Link href={"/sobre"}>
              <MenuItem
                bgColor="#191919"
                borderRadius={10}
                w={100}
                _hover={{ backgroundColor: "black" }}
                textColor="#FFC03C"
              >
                {".Sobre()"}
              </MenuItem>
            </Link>
            <Link href={"/contato"}>
              <MenuItem
                bgColor="#191919"
                borderRadius={10}
                w={100}
                _hover={{ backgroundColor: "black" }}
                textColor="#FFC03C"
              >
                {".Contatos()"}
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Flex>

      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">9</Text>
      </Flex>

      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">10</Text>
      </Flex>

      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">11</Text>
      </Flex>

      <Flex flexDir="row" mt={2}>
        <Text textColor="#8325FD">...</Text>
      </Flex>
    </Flex>
  );
}

export default RightIndexComp;
