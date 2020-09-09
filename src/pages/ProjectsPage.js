import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function ExperiencePage(props) {

    return(
        <div>
            <Hero subTitle={props.subTitle} />

            <Content>
            <h4>Web Application for Naeem Enterprises | Personal Project</h4>
            <p> 	•	Developing a web-based, data driven software for my uncle’s distribution business to assist with inventory management of go-down and market to keep track of orders from the clients and the delivery.</p>
            <p>     •	Prototyped the frontend using Adobe XD.</p>
            <p>     •	JavaScript’s React library to design the frontend and using NodeJS and related libraries for the backend purposes.</p>
            <p>     •	The database is being designed by a friend using SQL Workbench implemented MySQL database.</p>
            <p>     •	The migration to the software/website will help cut down cost and make the business efficient.</p>
            <br></br>
            <h4>Android App | Course Project </h4>
            <p> 	•	Developed an Android App that fetches information based on user preference from the server.</p>
            <p>     •	Developed a Sequential Server using JAVA so that the UI does not get crowded by all the information.</p>
            <p>     •	Used XML for the UI and gave the UI functionality with JAVA.</p>
            <br></br>
            <h4>To do list Website | Course Project </h4>
            <p> 	•	Generated tables in MySQL database using SQL for the user’s information so data can be saved and retrieved.</p>
            <p>     •	Used PHP, and JavaScript to encrypt user security to access the data and make sure the data is unique to the user.</p>
            <p>     •	Used PHP, HTML to showcase the data in tabular form and CSS for aesthetic style.</p>
            <br></br>
            <h4>Functional Website to bank users | Course Project </h4>
            <p> 	•	Generated tables in MySQL database using SQL for the bank user’s information so data can be saved and retrieved.</p>
            <p>     •	Used PHP, HTML, and JavaScript to (2- ways) encrypt user security to access the data and make transactions in securely.</p>

           
            </Content>
        </div>
    );

}

export default ExperiencePage;