import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_Covid from "../../assets/img/projects/covid.PNG";
import DiceGame from "../../assets/img/projects/Dice-game.png";
import Ecom from "../../assets/img/projects/ecom.png";
import Realestate from "../../assets/img/projects/real-estate.png";
import Gameimg from "../../assets/img/projects/gamestore.png";
import Paytm from "../../assets/img/projects/Paytm.png";
import Netflix from "../../assets/img/projects/Netflix.png"

import ToDO from "../../assets/img/projects/todo.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_FIREBASE from "../../assets/img/skills/370873.svg";
// import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_Javascript from "../../assets/img/skills/javascript.svg"

import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
// import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
// import L_DJANGO from "../../assets/img/skills/django.svg";
// import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
// import L_GIT from "../../assets/img/skills/github-api.svg";
// import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
    return (
        <div id='projects'>
            <h1 className='pt-3 text-center font-details-b pb-3'>PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* Project: Todo List With MUI */}
                    <ImageEvent
                        date='22/09/2022'
                        className='text-center'
                       // text='Mern Todolist'
                        src={ToDO}
                        alt='Todolist'
                    >
                        <div className='d-flex justify-content-between flex-column mt-1'>
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey='0'
                                            className='p-2 text-center accordian-main'
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse
                                            eventKey='0'
                                            className='text-left'
                                        >
                                            <Card.Body>
                                                <strong>Description:</strong>{" "}
                                                This is a fully authenticated
                                                todolist with realtime database
                                                where users information and
                                                notes are encrypted and
                                                stored.It is built using MERN
                                                stack.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className='list-styles pt-1'>
                                                    <li>
                                                        User information is
                                                        stored in MongoDb
                                                        datbase
                                                    </li>
                                                    <li>
                                                        Authenticated with Node
                                                        and Express
                                                    </li>
                                                    <li>
                                                        Jwt is used to identify
                                                        users
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_MONGODB}
                                                                alt='MongoDB'
                                                                rounded
                                                                className='image-style m-1'
                                                            ></Image>{" "}
                                                            MongoDB
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_EXPRESS}
                                                                alt='Express'
                                                                rounded
                                                                className='image-style m-1'
                                                            ></Image>{" "}
                                                            Express
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_REACT}
                                                                alt='React'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt='Node'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            Node
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className='d-flex justify-content-between flex-nowrap text-center'>
                                <UrlButton
                                    href='https://mellifluous-treacle-260642.netlify.app'
                                    target='_blank'
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href='https://github.com/MdRehan190/To-do-list'
                                    target='_blank'
                                >
                                    SOURCE CODE 
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Dice Game */}
                    <ImageEvent
                        date='15/10/2022'
                        className='text-center'
                        text='Dice Game'
                        src={DiceGame}
                        alt='Dice Game'
                    >
                        <div className='d-flex justify-content-between flex-column mt-1'>
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey='0'
                                            className='p-2 text-center accordian-main'
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse
                                            eventKey='0'
                                            className='text-left'
                                        >
                                            <Card.Body>
                                                <strong>Description:</strong>{" "}
                                                This is roll dice play game where user make score by scrolling and pass
                                                opponents for making score.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className='list-styles pt-1'>
                                                    <li>Rol Button Functionality</li>
                                                    <li>Switching the players</li>
                                                    <li>
                                                        React is used.
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_REACT}
                                                                alt='React'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt='Node.js'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            Node.js
                                                        </span>
                                                    </li>
                                                
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_Javascript}
                                                                alt='Javascript'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            Javascript
                                                        </span>
                                                    </li>
                                                  
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className='d-flex justify-content-between flex-nowrap text-center'>
                                <UrlButton
                                    href='https://aesthetic-basbousa-b6bcfb.netlify.app/'
                                    target='_blank'
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href='https://github.com/MdRehan190/Dice-Game'
                                    target='_blank'
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Project: E-commerce Website */}
                    <ImageEvent
                        date='17/12/2022'
                        className='text-center'
                        text='Ecommerce'
                        src={Ecom}
                        alt='Dice Game'
                    >
                        <div className='d-flex justify-content-between flex-column mt-1'>
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey='0'
                                            className='p-2 text-center accordian-main'
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse
                                            eventKey='0'
                                            className='text-left'
                                        >
                                            <Card.Body>
                                                <strong>Description:</strong>{" "}
                                                This is a e-commerce website where users
                                                can buy items.It is fully authenticated
                                                and uses realtime database.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className='list-styles pt-1'>
                                                    <li>User information is
                                                    stored in MongoDb
                                                    datbase</li>
                                                    <li>MongoDB database</li>
                                                    <li>
                                                        Selected items added in cart.
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_REACT}
                                                                alt='React'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt='Node.js'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            Node.js
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_MONGODB}
                                                                alt='Firebase'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            MongoDB
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className='d-flex justify-content-between flex-nowrap text-center'>
                                <UrlButton
                                    href='https://superb-buttercream-e8155c.netlify.app/'
                                    target='_blank'
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href='https://github.com/MdRehan190/E-Commerce'
                                    target='_blank'
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Project: Real-Estate */}
                    <ImageEvent
                    date='14/01/2023'
                    className='text-center'
                    text='Real-Estate'
                    src={Realestate}
                    alt='Real-Estate'
                    >
                    <div className='d-flex justify-content-between flex-column mt-1'>
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey='0'
                                        className='p-2 text-center accordian-main'
                                    >
                                        PROJECT DETAILS
                                    </Accordion.Toggle>

                                    <Accordion.Collapse
                                        eventKey='0'
                                        className='text-left'
                                    >
                                        <Card.Body>
                                            <strong>Description:</strong>{" "}
                                            This app is mainly used for real estate.
                                            Users can buy homes in different cities.
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className='list-styles pt-1'>
                                                <li>Integrated Payment Gateway</li>
                                                <li>Made with React:</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech used:</strong>
                                            <ul>
                                                <li>
                                                    <span className='p-2'>
                                                        <Image
                                                            src={L_HTML5}
                                                            alt='HTML5'
                                                            rounded
                                                            className='image-style1 m-1'
                                                        ></Image>{" "}
                                                        HTML
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='p-2'>
                                                        <Image
                                                            src={L_CSS3}
                                                            alt='CSS3'
                                                            rounded
                                                            className='image-style1 m-1'
                                                        ></Image>{" "}
                                                        CSS
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='p-2'>
                                                        <Image
                                                            src={L_REACT}
                                                            alt='React.js'
                                                            rounded
                                                            className='image-style1 m-1'
                                                        ></Image>{" "}
                                                        React
                                                    </span>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className='d-flex justify-content-between flex-nowrap text-center'>
                            <UrlButton
                                href='https://famous-hotteok-68b8fa.netlify.app'
                                target='_blank'
                            >
                                SEE LIVE
                            </UrlButton>
                            <UrlButton
                                href='https://github.com/MdRehan190/Real-Estate'
                                target='_blank'
                            >
                                SOURCE CODE
                            </UrlButton>
                        </div>
                    </div>
                    </ImageEvent>
                    {/* Project: Game Store */}
                    <ImageEvent
                    date='22/02/2023'
                    className='text-center'
                    text='Game-Store'
                    src={Gameimg}
                    alt='Game-Store'
                    >
                    <div className='d-flex justify-content-between flex-column mt-1'>
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey='0'
                                        className='p-2 text-center accordian-main'
                                    >
                                        PROJECT DETAILS
                                    </Accordion.Toggle>

                                    <Accordion.Collapse
                                        eventKey='0'
                                        className='text-left'
                                    >
                                        <Card.Body>
                                            <strong>Description:</strong>{" "}
                                            This app has lots of games.You can play games
                                            online as well as download games.
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className='list-styles pt-1'>
                                                <li>Integrated Payment Gateway</li>
                                                <li>Realtime Game streaming</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech used:</strong>
                                            <ul>
                                                <li>
                                                    <span className='p-2'>
                                                        <Image
                                                            src={L_REACT}
                                                            alt='React'
                                                            rounded
                                                            className='image-style1 m-1'
                                                        ></Image>{" "}
                                                        React
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='p-2'>
                                                        <Image
                                                            src={L_NODE_JS}
                                                            alt='Node.js'
                                                            rounded
                                                            className='image-style1 m-1'
                                                        ></Image>{" "}
                                                        Node.js
                                                    </span>
                                                </li>
                                                {/* <li>
                        <span className="p-2">
                        <Image
                            src={L_EXPRESS}
                            alt="Express"
                            rounded
                            className="image-style1 m-1"
                        ></Image>{" "}
                        Express
                        </span>
                    </li> */}
                                                {/* <li>
                        <span className="p-2">
                        <Image
                            src={L_MATERIALUI}
                            alt="Material-UI"
                            rounded
                            className="image-style1 m-1"
                        ></Image>{" "}
                        Material-UI
                        </span>
                    </li> */}
                                            </ul>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className='d-flex justify-content-between flex-nowrap text-center'>
                            <UrlButton
                                href='https://fastidious-youtiao-7286a8.netlify.app/'
                                target='_blank'
                            >
                                SEE LIVE
                            </UrlButton>
                            <UrlButton
                                href='https://github.com/MdRehan190/gaming-stores'
                                target='_blank'
                            >
                                SOURCE CODE
                            </UrlButton>
                        </div>
                    </div>
                    </ImageEvent>
                     {/* Project: Paytm clone */}
                     <ImageEvent
                     date='18/03/2023'
                     className='text-center'
                     text='Paytm clone'
                     src={Paytm}
                     alt='Paytm clone'
                     >
                     <div className='d-flex justify-content-between flex-column mt-1'>
                         <div>
                             <Accordion>
                                 <Card>
                                     <Accordion.Toggle
                                         as={Card.Header}
                                         eventKey='0'
                                         className='p-2 text-center accordian-main'
                                     >
                                         PROJECT DETAILS
                                     </Accordion.Toggle>
 
                                     <Accordion.Collapse
                                         eventKey='0'
                                         className='text-left'
                                     >
                                         <Card.Body>
                                             <strong>Description:</strong>{" "}
                                             This app has user authentication
                                             with firebase.You can make payment
                                             to any person securely
                                             <hr />
                                             <strong>Features:</strong>
                                             <ul className='list-styles pt-1'>
                                                 <li>User authentication</li>
                                                 <li>Firebase database</li>
                                                 <li>
                                                     For frontend react is
                                                     used and for backend
                                                     firebase is used.
                                                 </li>
                                             </ul>
                                             <hr />
                                             <strong>Tech used:</strong>
                                             <ul>
                                                 <li>
                                                     <span className='p-2'>
                                                         <Image
                                                             src={L_REACT}
                                                             alt='React'
                                                             rounded
                                                             className='image-style1 m-1'
                                                         ></Image>{" "}
                                                         React
                                                     </span>
                                                 </li>
                                                 <li>
                                                     <span className='p-2'>
                                                         <Image
                                                             src={L_NODE_JS}
                                                             alt='Node.js'
                                                             rounded
                                                             className='image-style1 m-1'
                                                         ></Image>{" "}
                                                         Node.js
                                                     </span>
                                                 </li>
                                                 <li>
                                                     <span className='p-2'>
                                                         <Image
                                                             src={L_FIREBASE}
                                                             alt='Firebase'
                                                             rounded
                                                             className='image-style1 m-1'
                                                         ></Image>{" "}
                                                         Firebase
                                                     </span>
                                                 </li>
                                             </ul>
                                         </Card.Body>
                                     </Accordion.Collapse>
                                 </Card>
                             </Accordion>
                         </div>
                         <div className='d-flex justify-content-between flex-nowrap text-center'>
                             <UrlButton
                                 href='https://tubular-seahorse-d330df.netlify.app/'
                                 target='_blank'
                             >
                                 SEE LIVE
                             </UrlButton>
                             <UrlButton
                                 href='https://github.com/MdRehan190/Paytm-Clone'
                                 target='_blank'
                             >
                                 SOURCE CODE
                             </UrlButton>
                         </div>
                     </div>
                     </ImageEvent>

                     <ImageEvent
                     date='14/04/2023'
                     className='text-center'
                     text='Netflix clone'
                     src={Netflix}
                     alt='Netflix Clone'
                     >
                     <div className='d-flex justify-content-between flex-column mt-1'>
                         <div>
                             <Accordion>
                                 <Card>
                                     <Accordion.Toggle
                                         as={Card.Header}
                                         eventKey='0'
                                         className='p-2 text-center accordian-main'
                                     >
                                         PROJECT DETAILS
                                     </Accordion.Toggle>
 
                                     <Accordion.Collapse
                                         eventKey='0'
                                         className='text-left'
                                     >
                                         <Card.Body>
                                             <strong>Description:</strong>{" "}
                                             This app lots of movies in different categories
                                             like bollywood,hollywood,horroe,thriller etc
                                             <hr />
                                             <strong>Features:</strong>
                                             <ul className='list-styles pt-1'>
                                                 <li>Watch movie online</li>
                                                 <li>Recommendation system</li>
                                                 <li>
                                                     For frontend react is
                                                     used and for backend
                                                     firebase is used.
                                                 </li>
                                             </ul>
                                             <hr />
                                             <strong>Tech used:</strong>
                                             <ul>
                                                 <li>
                                                     <span className='p-2'>
                                                         <Image
                                                             src={L_REACT}
                                                             alt='React'
                                                             rounded
                                                             className='image-style1 m-1'
                                                         ></Image>{" "}
                                                         React
                                                     </span>
                                                 </li>
                                                 <li>
                                                     <span className='p-2'>
                                                         <Image
                                                             src={L_Javascript}
                                                             alt='Javascript'
                                                             rounded
                                                             className='image-style1 m-1'
                                                         ></Image>{" "}
                                                         Javascript
                                                     </span>
                                                 </li>
                                                 <li>
                                                     <span className='p-2'>
                                                         <Image
                                                             src={L_FIREBASE}
                                                             alt='Firebase'
                                                             rounded
                                                             className='image-style1 m-1'
                                                         ></Image>{" "}
                                                         Firebase
                                                     </span>
                                                 </li>
                                             </ul>
                                         </Card.Body>
                                     </Accordion.Collapse>
                                 </Card>
                             </Accordion>
                         </div>
                         <div className='d-flex justify-content-between flex-nowrap text-center'>
                             <UrlButton
                                 href='https://resonant-flan-ae0591.netlify.app/'
                                 target='_blank'
                             >
                                 SEE LIVE
                             </UrlButton>
                             <UrlButton
                                 href='https://github.com/MdRehan190/Netflix-Clone'
                                 target='_blank'
                             >
                                 SOURCE CODE
                             </UrlButton>
                         </div>
                     </div>
                     </ImageEvent> 
                    

                    {/* {project covid tracker} */}
                    <ImageEvent
                        date='12/08/2023'
                        className='text-center'
                        text='Covid Tracker'
                        src={L_Covid}
                        alt='covid tracker'
                    >
                        <div className='d-flex justify-content-between flex-column mt-1'>
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey='0'
                                            className='p-2 text-center accordian-main'
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse
                                            eventKey='0'
                                            className='text-left'
                                        >
                                            <Card.Body>
                                                <strong>Description:</strong>
                                                Keep track on covid-19 cases all
                                                over the world.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className='list-styles pt-1'>
                                                    <li>API from disease.sh</li>
                                                    <li>
                                                        Graph for covid cases in
                                                        last 120 days
                                                    </li>
                                                    <li>
                                                        Can be installed in
                                                        Android phones using
                                                        Progressive web apps{" "}
                                                    </li>
                                                    <li>
                                                        Can track covid cases in
                                                        every country
                                                    </li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_REACT}
                                                                alt='React'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt='Node.js'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            Node.js
                                                        </span>
                                                    </li>
                                                   
                                                    <li>
                                                        <span className='p-2'>
                                                            <Image
                                                                src={L_FIREBASE}
                                                                alt='Firebase'
                                                                rounded
                                                                className='image-style1 m-1'
                                                            ></Image>{" "}
                                                            Firebase
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className='d-flex justify-content-between flex-nowrap text-center'>
                                <UrlButton
                                    href='https://covid-tracker-586d8.web.app/'
                                    target='_blank'
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href='https://github.com/MdRehan190/Covid-Tracker-1'
                                    target='_blank'
                                >
                                    SOURCE CODE
                                </UrlButton>
                               
                            </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    );
};

export default TimeLine;
