import React, { Component } from "react";
import { Box, Flex, Text, Image, Button } from "rebass";

export default class Navbar extends Component {
  render() {
    const departments = [
      "HOME",
      "ACCOUNTING",
      "RISK MANAGEMENT",
      "TAX PLANNING",
      "REAL ESTATE"
    ];
    return (
      <Flex className="navbar" flexDirection="column">
        <Flex className="navbar-top">
          <span> English | Chinese | Join Our Team | Contact Us</span>
        </Flex>
        <Flex className="navbar-tabs">
          {departments.map(department => (
            <Flex
              key={department}
              className="navbar-tab"
              width="25%"
              height={50}
              onClick={() =>
                console.log("placeholder log before routes are set up")
              }
              cursor="pointer"
              bg="transparent"
              alignItems="center"
              justifyContent="center"
              mx={0.5}
            >
              <Text p={3} fontSize="22px" color="black" fontWeight="bold">
                {department}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  }
}
