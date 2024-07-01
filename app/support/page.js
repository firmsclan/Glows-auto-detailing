'use client'
import React, { useState } from 'react';
import {writeToDataFile} from '../services/client-data/client-data-service';
import { content, footerContent, headerContent } from './../../components/content/content';
import Header from '@/components/src/server/header';

const Contact = () => {
const [support , setSupport] = useState({
    email: '',
    message: '',
})
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", support.email);
    console.log("Message:", support.message);
    writeToDataFile(support)
  };

  return (
    <section>
    <Header content={headerContent} />
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="Enter your email"
            value={support.email}
            onChange={(e) => setSupport({...support,email: e.target.value})}
          />
        </section>
        <section>
          <label htmlFor="message">Questions/Concerns:</label>
          <textarea
            placeholder="Enter your questions or concerns"
            value={support.message}
            onChange={(e) => setSupport({...support,message: e.target.value})}
          />
        </section>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
