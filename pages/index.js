import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
    <div>
        <Head>
            <title>Level Up Arcade, Eugene, OR - Open 7 days a week!</title>
            <link rel="icon" href="/images/favicon.ico" />
            <meta charset="utf-8" />
            <meta name="keywords" content="Level Up Arcade, Eugene, OR, Oregon, Barcade, Pinball, Drinks, Events" />
            <meta name="description" content="Level Up Arcade in Eugene, Open 7 days a week from 2PM Until 2AM on Weekdays, and Noon until 2AM on Weekends. All ages welcome until 9PM, 21+ after 9PM." />
            <meta name="author" content="Antonio Ortega Jr, Bau Kim" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Nav />
        <div id="home" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <h1>Level Up Arcade</h1>
                        <h2>Food, Drinks, Games, and a DJ Every Week!</h2>
                    </div>
                    <div class="col-md-2">
                    </div>
                </div>
            </div>
        </div>
        <div id="about" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-xs-11">
                        <div class="media">
                            <div class="media-object media-left">
                                <i class="fa fa-gamepad"></i>
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">Come Join the Fun</h3>
                                <p>
                                    Inside you will find lots of standup arcade games,
                                    pinball machines, group party games, drivers, shooters, golf, and much more.
                                    On Friday/Saturday, we have a DJ spinning tunes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-11">
                        <div class="media">
                            <div class="media-object media-left">
                                <i class="fa fa-birthday-cake"></i>
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">Food and Drinks</h3>
                                <p>
                                    Check out our full menu of snacks and drinks. Try our cocktails, beers, or soda. Grab a bite to eat at lunch or dinner, or have a late night snack.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-11">
                        <div class="media">
                            <div class="media-object media-left">
                                <i class="fa fa-clock-o"></i>
                            </div>
                            <div class="media-body">
                                <h3 class="media-heading">Open All Week</h3>
                                <p>
                                    We are open 7 days a week, from <b>2:00 PM until 2:00 AM</b> weekdays
                                    and <b>12:00 PM until 2:00 AM</b> on weekends.
                                    <br />
                                    Everybody welcome until 9:00 PM, 21+ only after 9:00 PM.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="contact" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-lg-offset-1 col-md-6">
                        <address>
                            <p class="contact-title">CONTACT US</p>
                            <p><i class="fa fa-phone"></i> <a href="tel:5416545632">541-654-5632</a></p>
                            <p><i class="fa fa-facebook"></i> <a href="https://www.facebook.com/leveluparcade/">facebook.leveluparcade</a></p>
                            <p><i class="fa fa-map-marker"></i> <a href="https://goo.gl/maps/4K9sioboBLdJ1HBk6">1290 Oak St, Eugene, OR 97405</a></p>
                        </address>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p>Copyright &copy; 2020 Level Up</p>
                    </div>
                </div>
            </div>
        </footer>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link href='http://fonts.googleapis.com/css?family=Raleway:400,300,700,800' rel='stylesheet' type='text/css' />
    </div>
)

export default Home
