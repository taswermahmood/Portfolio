import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function ExperiencePage(props) {

    return(
        <div>
            <Hero subTitle={props.subTitle} />

            <Content>
            <h4>New Jersey Institute of Technology | Computer Lab Assistant | October 2019 – Present</h4>
            <p> 	• Helps students with any problems in the lab regarding hardware and software.</p>
            <p>     • Update all the lab computers and applications and make sure they run adequately.</p>
            <br></br>
            <h4>McDonalds | Crew Trainers | October 2017 – March 2020</h4>
            <p> 	• Train new employees hired by McDonalds so that the crew depend on them as soon as possible.</p>
            <p>     • Provided precise customer service which led to an increase in sales by 9% this fiscal year.</p>

           
            </Content>
        </div>
    );

}

export default ExperiencePage;