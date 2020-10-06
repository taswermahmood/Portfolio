import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function ExperiencePage(props) {

    return(
        <div>
            <Hero subTitle={props.subTitle} />

            <Content>
        <h4>Front-end Developer | Garnet LLC | September - Present</h4>
            <p> 	• Developing the frontend for a web-based magazine company.</p>
            <p>     • JavaScript’s React library to design the frontend.</p>
        <p>     • Made custom hooks to fetch data from the backend services. Implemented React Router Dom to switch between content.
Used validation library, Formik to validate the credentials of the subscribers and giving access to magazine for download purposes.</p>
        <p>     • Implemented filtering of articles fetched from the database by installing a search engine.</p>
        <p>     • Involved in using Material UI for a responsive frontend experience.</p>
        <br></br>
            <h4>New Jersey Institute of Technology | Computer Lab Assistant | October 2019 – Present</h4>
            <p> 	• Helps students with any problems in the lab regarding hardware and software.</p>
            <p>     • Update all the lab computers and applications and make sure they run adequately.</p>
       
 
            </Content>
        </div>
    );

}

export default ExperiencePage;
