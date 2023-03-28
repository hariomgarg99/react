import logo from './logo.svg';
import './App.css';
import { Component, useState, useEffect } from 'react';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Message from './component/Message'
import Counter from './component/Counter';
import EventBinding from './component/EventBinding';
import Parent from './component/Parent';
import SearchFilter from './component/SearchFilter'
import FormValidation from './component/FormValidation'
import QuizApp from './component/QuizApp';
import ContactCard from './component/ContactCard';
import ContactHelper from './component/ContactHelper';

function App() {

  // const [results, setResults] = useState([])
  // const dataHandler = () => {
  //   fetch("https://randomuser.me/api/?results=5")
  //     .then(results => results.json())
  //     .then(data => setResults(data.results))
  // }

  // useEffect(dataHandler, [])
  {
    return (
      <div>

        {/* <EventBinding></EventBinding> */}

        {/* <Parent></Parent> */}

        {/* <Message>
      </Message> */}

        {/* <SearchFilter></SearchFilter> */}
        {/* 
<FormValidation></FormValidation> */}

        {/* <QuizApp></QuizApp> */}

        {/* {results.map((contact) =>
          <ContactCard
            // avtarImg={conatct.avtarImg}
            name={contact.name}
            email={contact.email}
            dob={contact.dob}
            gender={contact.gender}
          ></ContactCard>
        )} */}

        <ContactHelper></ContactHelper>
        {/* <Counter>
      </Counter> */}
        {/* <Greet name="Hariom">
        <p>This is a children</p>
      </Greet>
      <Greet name="Vaishnavi">
        <button>click here</button>
      </Greet>
      <Greet name="Sanvi"></Greet> */}
        {/* <Welcome></Welcome> */}
      </div>

    )
  }
}
export default App;
