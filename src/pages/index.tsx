import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../app/components/header";
import RightIndexComp from "../app/components/Index/rightIndexComp";
import LeftIndexComp from "../app/components/Index/leftIndexComp";

export default function index() {
  return (
    <Box bgColor={"black"} color={"white"} h="100%" w={["110%","110%","110%","110%","100%"]}>
      <Flex flexDirection={"column"}>
        <Header />
        <Flex gap={10}>
          <LeftIndexComp />
          <RightIndexComp />
        </Flex>
      </Flex>
    </Box>
  );
}
