import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: "Ronen Fromchuk",
      username: "ronenfromchuk",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/184172969_10208106094208133_4876469880223864962_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=NRgdiE3CPOgAX_vAwWb&tn=9NHzQuvxLvQ4sGOn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_2AwIqakB7Z4XEyvtL2ZEEdTbcRkOJurCIFUqRg8erQA&oe=62702DFA",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
            <Avatar
              src="https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/184172969_10208106094208133_4876469880223864962_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=NRgdiE3CPOgAX_vAwWb&tn=9NHzQuvxLvQ4sGOn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT_2AwIqakB7Z4XEyvtL2ZEEdTbcRkOJurCIFUqRg8erQA&oe=62702DFA"/>
              <input
              onChange={e => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="Leave your comment below! (IT'S LIVE!) 🔴"
              type="text"
              />
            </div>
            <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className='tweetBox__imageInput'
            placeholder="Enter image URL"
            type="text"
            />
            <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox;