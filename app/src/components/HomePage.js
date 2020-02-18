import React, { Component } from "react"
import {
    Box,
    Flex,
    Heading,
    Text,
    Image
} from 'rebass'
import Navbar from "./Navbar"

export default class Homepage extends Component {
    render() {
        return (
            <Flex className="home-container" flexDirection="column" maxWidth="80%">
                <Navbar />
                <Box
                    className="home-image"
                    height="435px"
                    sx={{
                        backgroundImage: 'url(images/index.png)',
                        backgroundSize: 'cover',
                        color: 'white',

                    }}>
                    <Box textAlign='left'
                        pt="75px"
                        pl="7.5%"
                        width="35%"
                    >

                        <Heading
                            fontSize={5}>
                            Your Financial Family
                        </Heading>
                        <Text fontSize="20px" pt="10px" fontWeight="bold">
                            We are a team of dedicated experts ready to
                            promote what you need to feel financially fulfilled
                        </Text>

                    </Box>
                </Box>

                <div className="who-are-we">
                    <div className="who-are-we-text">
                        <h1>Who Are We</h1>
                        <p>
                            I am the founder and leader of Zhou Agency, and I started this business 20 years ago with the dream of helping people understand their financial story.
                        </p>
                    </div>
                    <div className="who-are-we-image">
                        <img src="images/jun.png" height="250" width="250" />

                    </div>
                </div>
                <div className="why-trust-us">
                    <h1>Why Trust Us</h1>
                    <p>Instead of going on about the personalized care we give our clients, we will let the our reviews and statistics speak for us.</p>

                    <br />
                    <h1>Reviews</h1>

                    <div className="reviews-container">
                        <div className="review">
                            <div className="review-text">
                                This is a 5 star review! couldn't be happier
                            </div>
                            <div className="review-stars">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <div className="review-author">
                                -Yaodi Hu
                            </div>
                        </div>
                        <br />
                        <div className="review">
                            <div className="review-text">
                                This is a 5 star review! couldn't be happier
                            </div>
                            <div className="review-stars">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <div className="review-author">
                                -Yaodi Hu
                            </div>
                        </div>

                    </div>
                    <br />


                    <h1>Statistics</h1>
                    <div className="stats-box-container">
                        <div className="stats-box-row">
                            <div>
                                <div className="bold-stats">
                                    95%
                                </div> <p>
                                    Retention rate for insurance
                        </p>
                            </div>
                            <div>

                                <div className="bold-stats">
                                    1,685
                        </div>
                                <p>
                                    Tax returns filed in 2019
                        </p>
                            </div>

                        </div>
                        <div className="stats-box-row">
                            <div>

                                <div className="bold-stats">
                                    500+
                        </div> <p>
                                    Families assisted in finding a home/investment property
                        </p>
                            </div>
                            <div>

                                <div className="bold-stats">
                                    102
                        </div> <p>
                                    Small businesses with full service daily accounting
                        </p>
                            </div>
                        </div>


                    </div>
                    <div className="padding-top50" />

                </div>
                <div className="mission-statement">
                    <i> <b>Mission Statement:</b> This is where our mission statement will go, putting in a little bit of filler text in this spot for the time being.</i>
                </div>
                <hr />

            </Flex >
        )
    }
}