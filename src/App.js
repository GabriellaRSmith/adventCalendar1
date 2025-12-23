
import './App.css';
import React from 'react';
import cookie1 from './assets/cookie1.png'
import cookie2 from './assets/cookie2.png'
import cookie3 from './assets/cookie3.png'
import cookie4 from './assets/cookie4.png'
import cookie5 from './assets/cookie5.png'
import cookie6 from './assets/cookie6.png'
import cookie7 from './assets/cookie7.png'
import cookie8 from './assets/cookie8.png'
import cookie9 from './assets/cookie9.png'
import cookie10 from './assets/cookie10.png'
import cookie11 from './assets/cookie11.png'
import cookie12 from './assets/cookie12.png'
import cookie13 from './assets/cookie13.png'
import cookie14 from './assets/cookie14.png'
import cookie15 from './assets/cookie15.png'
import finalCookie from './assets/finalCookie.png'
import kissImg from './assets/kiss.png'
import movieImg from './assets/movieImg.jpg'
import candy from './assets/candy.png'
import pickle from './assets/pickleball.png'
import book from './assets/book.png'
import bakeCookies from './assets/bakeCookies.png'
import hotChocolate from './assets/hotChocolate.png'
import gift from './assets/gift.png'
import lights from './assets/lights.png'
import ornament from './assets/ornament.png'
import music from './assets/music.png'
import past from './assets/past.jpeg'
import connections from './assets/connections.png'
import letter from './assets/letter.png'
import quiz from './assets/quiz.jpg'
import food from './assets/food.png'
import non from './assets/non.png'
import pjs from './assets/pjs.jpg'
import escapeR from './assets/escape.jpg'
import vid from './assets/video.jpg'
import laugh from './assets/ho.jpg'

const calendarData = [
  {
    id: 1,
    title: "December 1st",
    image: cookie1,
    unlockDate: "2025-12-01",
    giftMessage: "Happy December 1st, you get a kiss!",
    giftImage: kissImg
  },
  {
    id: 2,
    title: "December 2nd",
    image: cookie2,
    unlockDate: "2025-12-02",
    giftMessage: "Happy December 2nd Robert! Lets watch a Christmas Movie together!",
    giftImage: movieImg
  },
  {
    id: 3,
    title: "december 3rd",
    image: cookie3,
    unlockDate: "2025-12-03",
    giftMessage: "Happy December 3rd! I got you some candy!",
    giftImage: candy
  },
  {
    id: 4,
    title: "December 4th",
    image: cookie4,
    unlockDate: "2025-12-04",
    giftMessage: "Happy December 4th! Lets play pickle ball!!",
    giftImage: pickle
  },
  {
    id: 5,
    title: "December 5th",
    image: cookie5,
    unlockDate: "2025-12-05",
    giftMessage: "Happy December 5th! Today I'll be taking you to Barnes and Nobles to get you a book or just hang out!",
    giftImage: book
  },
  {
    id: 6,
    title: "December 6th",
    image: cookie6,
    unlockDate: "2025-12-06",
    giftMessage: "Happy December 6th! I have a special present for you!",
    giftImage: kissImg
  },
  {
    id: 7,
    title: "December 7th",
    image: cookie7,
    unlockDate: "2025-12-07",
    giftMessage: "Happy December 7th! Today is going to be a nice day inside! Let's have a reading date and bake some cookies!!",
    giftImage: bakeCookies
  },
  {
    id: 8,
    title: "December 8th",
    image: cookie8,
    unlockDate: "2025-12-08",
    giftMessage: "Happy December 8th! It's almost Christmas, so let's make some frozen hot chocolate!",
    giftImage: hotChocolate
  },
  {
    id: 9,
    title: "December 9th",
    image: cookie9,
    unlockDate: "2025-12-09",
    giftMessage: "Happy December 9th! Gift exchange day!!!",
    giftImage: gift
  },
  {
    id: 10,
    title: "December 10th",
    image: cookie10,
    unlockDate: "2025-12-10",
    giftMessage: "Happy December 10th! Hope you're free tonight and excited to look at some lights!",
    giftImage: lights
  },
  {
    id: 11,
    title: "December 11th",
    image: cookie11,
    unlockDate: "2025-12-11",
    giftMessage: "Happy December 11th! I want to make this Christmas special. Let's paint an ornament together!",
    giftImage: ornament
  },
  {
    id: 12,
    title: "December 12th",
    image: cookie12,
    unlockDate: "2025-12-12",
    giftMessage: "Happy December 12th! I give you a big hug and a kiss! I love you!",
    giftImage: kissImg
  },
  {
    id: 13,
    title: "December 13th",
    image: cookie13,
    unlockDate: "2025-12-13",
    giftMessage: "Happy December 13th! Time to get into the Christmas spirit, here's a playlist just for you! https://open.spotify.com/playlist/1Z16XljxPicxc1hVUsIl23?si=b6128aa3f826469a&pt=ee0beaf9dba0df7cb03cfd33a4b21c85",
    giftImage: music
  },
  {
    id: 14,
    title: "December 14th",
    image: cookie14,
    unlockDate: "2025-12-14",
    giftMessage: "Happy December 14th! I miss you so much, was looking back on memories and found this! I love you babe!",
    giftImage: past
  },
  {
    id: 15,
    title: "December 15th",
    image: cookie15,
    unlockDate: "2025-12-15",
    giftMessage: "Happy December 15th! 10 days away, it's time to write our letters to Santa!",
    giftImage: letter
  },
  {
    id: 16,
    title: "December 16th",
    image: cookie1,
    unlockDate: "2025-12-16",
    giftMessage: "Happy December 16th! Here's a game just for you baby! https://connections.swellgarfo.com/game/-OgDSuRLs9fFEDK4lSE6",
    giftImage: connections
  },
  {
    id: 17,
    title: "December 17th",
    image: cookie3,
    unlockDate: "2025-12-17",
    giftMessage: "Happy December 17th! On the topic of games, here's some Christmas trivia for you!\n I have some options for you but we must do it together: 1. https://triviamaker.com/game-preview/game/TR20251201176458741510271-Christmas-Event-Answer-battle-quiz \n 2. https://parade.com/943457/parade/christmas-trivia/",
    giftImage: quiz
  },
  {
    id: 18,
    title: "December 18th",
    image: cookie2,
    unlockDate: "2025-12-18",
    giftMessage: "Happy December 18th! Since you're so sweet, you deserve something just as sweet! Either I doordash you or I pay for something you get, your choice.",
    giftImage: food
  },
  {
    id: 19,
    title: "December 19th",
    image: cookie5,
    unlockDate: "2025-12-19",
    giftMessage: "Happy December 19th! Almost time! How about we get in the spirit with a christmas movie of your choice!",
    giftImage: movieImg
  },
  {
    id: 20,
    title: "December 20th",
    image: cookie7,
    unlockDate: "2025-12-20",
    giftMessage: "Happy December 20th! Are you naughty or nice? Let's find out with some quizzes I found. 1. https://www.buzzfeed.com/benhenry/naughty-or-nice \n 2. https://ricepuritytest.com/ ",
    giftImage: non
  },
  {
    id: 21,
    title: "December 21st",
    image: cookie4,
    unlockDate: "2025-12-21",
    giftMessage: "Happy December 21st! Let's wear our matching christmas pjs somehow today! Love you baby!",
    giftImage: pjs
  },
  {
    id: 22,
    title: "December 22nd",
    image: cookie6,
    unlockDate: "2025-12-22",
    giftMessage: "Happy December 22nd! I miss you a lot, so here's a video from me to you. Send me a video of you too! \n https://youtu.be/9JcM82lgLlk",
    giftImage: vid
  },
  {
    id: 23,
    title: "December 23th",
    image: cookie13,
    unlockDate: "2025-12-23",
    giftMessage: "Happy December 23rd! Happy Christmas Eve Eve! We're going to do a Christmas mad lib. Must do together!",
    giftImage: laugh
  },
  {
    id: 24,
    title: "December 24th",
    image: cookie9,
    unlockDate: "2025-12-24",
    giftMessage: "Happy December 24th! Merry Christmas Eve! Let's play a game, can you escape?",
    giftImage: escapeR
  },
  {
    id: 25,
    title: "Christmas!!",
    image: finalCookie,
    unlockDate: "2025-12-25",
    giftMessage: "Merry Christmas Robert! I hope you have a very merry day and here's a link to your Christmas poem.",
    giftImage: kissImg
  }
];

function App() {
  const [selectedCookie, setSelectedCookie] = React.useState(null);
  const [isLocked, setIsLocked] = React.useState(false);
  const handleCookieClick = (cookie) => {
    const now = new Date();
    const openDate = new Date(cookie.unlockDate + "T00:00:00");
    
    if (now >= openDate) {
      setSelectedCookie(cookie);
    } else {
      alert(`⏳ Too early! Come back on ${openDate.toDateString()}.`);
    }

  
  };
  const closeModal = () => {
    setSelectedCookie(null);
    setIsLocked(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p className='message'>
          Merry Christmas Robert! Click on a cookie to unlock a gift!
        </p>
      
      <div className="baking-sheet">
        {calendarData.map(cookie => (
          <div key={cookie.id} className="cookie-wrapper">
            <button
              className="cookie-btn"
              onClick={() => handleCookieClick(cookie)}
            >
              <img src={cookie.image} alt={cookie.title} />
            </button>
            <div className="cookie-title">{cookie.title}</div>
          </div>
        ))}
      </div>
      </header>
      {selectedCookie && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={closeModal}>×</button>
          {isLocked ? (
            <>
              <h2>🔒 {selectedCookie.title}</h2>
              <div className="locked-icon">⏳</div>
              <p className="gift-message">Too early! Come back on {new Date(selectedCookie.unlockDate + "T00:00:00").toDateString()}.</p>
            </>
          ) : (
            <>
              <h2>🎁 {selectedCookie.title}</h2>
              <p className="gift-message">{selectedCookie.giftMessage}</p>
              <img 
                src={selectedCookie.giftImage} 
                alt="Your gift" 
                className="gift-image"
              />
            </>
          )}
        </div>
      </div>
    )}
    </div>
  );
}

export default App;
