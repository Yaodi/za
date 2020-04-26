import React, { Component } from "react";
import { Flex, Text } from "rebass";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const departments = [
      "HOME",
      "ACCOUNTING",
      "INSURANCE",
      "REAL ESTATE",
      "SEMINARS",
    ];
    return (
      <Flex className="navbar" flexDirection="column">
        <Flex className="navbar-top">
          <span> Chinese | Join Our Team | Contact Us</span>
        </Flex>
        <Flex className="navbar-tabs">
          {departments.map((department) => (
            <Flex
              key={department}
              className="navbar-tab"
              width="25%"
              height={50}
              cursor="pointer"
              bg="transparent"
              alignItems="center"
              justifyContent="center"
              mx={0.5}
            >
              <Link
                to={"/" + department.toLowerCase().replace(" ", "")}
                style={{ textDecorationLine: "none" }}
              >
                <Text p={3} fontSize="22px" color="black" fontWeight="bold">
                  {department}
                </Text>
              </Link>
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  }
}
