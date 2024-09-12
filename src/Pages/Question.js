import React from "react";
import QuestionDetails from "./QuestionDetails";
import "../Css/Question.css"

const Question = () => {
  
  return (
    <div className="questions ">
      <h2>Frequently Asked Question</h2>
      <div>
        <QuestionDetails
          question="How can I send online Bulk SMS in India to my registered customers"
          ans="As We Provide Bulk SMS Services In India, OTP & Transactional SMS, Bulk Promotional SMS, Enterprise Bulk SMS, Free Bulk SMS API & Gateway In India. Our easy-to-use bulk SMS Services control panel simplifies the process of sending messages. Simply log on to the Bulk SMS Services India Provider - TextGuru.In  dashboard, and you'll find the two-step process straightforward. In step one, enter the mobile numbers you want to receive the message. In step two, type out your message, and click on the send SMS button to deliver it to the mobile numbers you requested. With our intuitive control panel, sending bulk SMS is quick, easy, and hassle-free"
        />
      </div>
      <div>
        <QuestionDetails
          question="What is the difference between transactional SMS & promotional SMS"
          ans="Transactional SMS : Transactional SMS are informative messages that people enjoy receiving, such as banking alerts, school and college updates, bill payment reminders, and OTPs. These messages are delivered to all mobile numbers, whether they are on the Do Not Disturb (DND) list or not, and they can be sent and received 24 hours a day."
           ans2=" Promotional SMS : On the other hand, Brands use Promotional SMS to boost their reach and sales. These messages can be sent to both registered and non-registered mobile numbers, but only during specific hours of the day, from 9 am to 9 pm. Promotional SMS are not delivered to mobile numbers on the DND list, and they are typically used to promote products, services, or offers. By understanding the difference between these two types of SMS, businesses can craft their messaging strategy to better target their audience and meet their communication needs."
        />
        </div>
        <div>
          <QuestionDetails
            question="Do you provide bulk SMS excel plugin to send SMS"
            ans="Yes, We provide bulk SMS excel plugin to send different SMS to different mobile numbers. Like school sent mark sheet SMS to parent's mobile number."
          />
        </div>
        <div>
          <QuestionDetails
            question="Do you provide bulk SMS api to send SMS from my website"
            ans="Do you provide bulk SMS excel plugin to send SMS"
          />
        </div>
        <div>
          <QuestionDetails
            question=" How can I apply sender name as a header of SMS"
            ans="OfCourse, we support sender id in 6 alphabets. Like TxtGru as a header of your SMS."
          />
        </div>
      </div>
   
  );
};

export default Question;
