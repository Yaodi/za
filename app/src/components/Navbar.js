import React, { Component } from "react"
import {
    Box,
    Flex,
    Text,
    Image,
    Button
} from 'rebass'

export default class Navbar extends Component {
    render() {
        const departments = ['REAL ESTATE', 'ACCOUNTING', 'INSURANCE', 'SIGNATURE SEMINAR', 'JOIN OUR TEAM']
        return (
            <Flex className="navbar" flexDirection='column'>
                <Flex className="navbar-top">
                    <Image src='images/logo.png' width={1 / 2} />
                    <Flex width={1 / 2} pl="20%" flexDirection="row-reverse" alignItems="center">
                        <Box pr="10px">
                            <Box m={1}>
                                <Button className="square-button" variant='outline' color="black" bg="white">English</Button>
                                <Button className="square-button" variant='outline' color="black" bg="white">Chinese</Button>
                            </Box>
                            <Box>
                                <Button className="square-button" variant='outline' color="black" bg="white">Contact Us</Button>
                                <Button className="square-button" variant='outline' color="black" bg="white">Join Our Team</Button>
                            </Box>
                        </Box>

                    </Flex>
                </Flex>
                <Flex className="navbar-tabs">
                    {departments.map(department => <Flex
                        key={department}
                        className="navbar-tab"
                        width="25%"
                        height={50}
                        onClick={() => console.log("placeholder log before routes are set up")}
                        cursor="pointer"
                        bg='grey'
                        alignItems='center'
                        justifyContent='center'
                        mx={.5}
                    >
                        <Text
                            p={3}
                            fontSize={3}
                            fontWeight='bold'
                            color='white'
                        >
                            {department}
                        </Text>
                    </Flex>)}
                </Flex>
            </Flex>
        )

    }
}