import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Level Up</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <img src="/mainLogo.png" />
      <h1 className="title">Level Up Arcade</h1>
      <p className="description">
      We are located on the corner of 13th and Oak Street, on the edge of Downtown in Eugene, Oregon.
      </p>
      <div className="row">
        <p>
          We are open 7 days a week, from 2PM until 2AM weekdays. Weekends noon until 2AM. Those under 21 are allowed until 9pm. After 9pm, its 21+ only.
        </p>
        <p>
          Inside you will find lots of standup arcade games, a few cocktail games, drivers shooter, golf....and more. A long wall of pinball games! Some games are brand new, some are older, some are the classics. On Friday/Saturday, we have a DJ spinning tunes.
        </p>
      </div>
      <div className="row">
      <p>
      Inside you will find lots of standup arcade games, a few cocktail games, drivers shooter, golf....and more. A long wall of pinball games! Some games are brand new, some are older, some are the classics. On Friday/Saturday, we have a DJ spinning tunes.
      </p>
      <p>
      Play a few games. Enjoy a beer or other beverage. Grab a bite to eat at lunch, dinner, or have a late night snack.
      </p>
      </div>
      <div>
      © 2020 Level Up Arcade
      </div>
    </div>
    <style jsx>{`
      .hero img {
        width: 100%;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
      }
    `}</style>
  </div>
)

export default Home
