import React from 'react'
// css
import '../styles/taskweek.css'
// assets
import taskers from '../assets/tof.png'
import dusk from '../assets/Dusk.jpg'
// icons
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const Taskweek = () => {
  return (
    <div className="task-of-week">
        <div className="tof-main">
            <div className="tof-container">
                <div className="tof-contents">
                    <section id='tof-cards'>
                        <div className="tasker-list">
                            <div className="tasker-list-header">
                                <h1>Learn from these <span>TASKERS</span></h1>
                                <p>These taskers are the most reliable helping hand for your task.</p>
                                <p>Let’s be more productive daily! Be the Tasker of the Week.</p>
                            </div>
                            <div className="tasker-list-contents">
                                <ul>
                                    <li>
                                        <div className="tasker-image">
                                            <img src={dusk} alt="" />
                                        </div>
                                        <div className="tasker-infos">
                                            <div className="tasker-head-info">
                                                <h1>Santos, Miguel</h1>
                                                <p><MdOutlineStarPurple500 id='star'/> 100% Positive Reviews</p>
                                                <p><FaCheck  id='check'/> 412 Task Done</p>
                                            </div>
                                            <div className="tasker-head-contents">
                                                <h1>Feature Skill</h1>
                                                <div className="skill-sets">
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                </div>
                                                <div className="skill-sets">
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                </div>
                                                <h1>This is why you should hire me...</h1>
                                                <div className="should-hire">
                                                    <p>I’m good at anything just pay me</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tasker-image">
                                            <img src={dusk} alt="" />
                                        </div>
                                        <div className="tasker-infos">
                                            <div className="tasker-head-info">
                                                <h1>Santos, Miguel</h1>
                                                <p><MdOutlineStarPurple500 id='star'/> 100% Positive Reviews</p>
                                                <p><FaCheck  id='check'/> 412 Task Done</p>
                                            </div>
                                            <div className="tasker-head-contents">
                                                <h1>Feature Skill</h1>
                                                <div className="skill-sets">
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                </div>
                                                <div className="skill-sets">
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                </div>
                                                <h1>This is why you should hire me...</h1>
                                                <div className="should-hire">
                                                    <p>I’m good at anything just pay me</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <div className="tasker-image">
                                            <img src={dusk} alt="" />
                                        </div>
                                        <div className="tasker-infos">
                                            <div className="tasker-head-info">
                                                <h1>Santos, Miguel</h1>
                                                <p><MdOutlineStarPurple500 id='star'/> 100% Positive Reviews</p>
                                                <p><FaCheck  id='check'/> 412 Task Done</p>
                                            </div>
                                            <div className="tasker-head-contents">
                                                <h1>Feature Skill</h1>
                                                <div className="skill-sets">
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                </div>
                                                <div className="skill-sets">
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                </div>
                                                <h1>This is why you should hire me...</h1>
                                                <div className="should-hire">
                                                    <p>I’m good at anything just pay me</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="tasker-image">
                                            <img src={dusk} alt="" />
                                        </div>
                                        <div className="tasker-infos">
                                            <div className="tasker-head-info">
                                                <h1>Santos, Miguel</h1>
                                                <p><MdOutlineStarPurple500 id='star'/> 100% Positive Reviews</p>
                                                <p><FaCheck  id='check'/> 412 Task Done</p>
                                            </div>
                                            <div className="tasker-head-contents">
                                                <h1>Feature Skill</h1>
                                                <div className="skill-sets">
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                </div>
                                                <div className="skill-sets">
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                    <p>Gardener <span>₱ 130/hr</span></p>
                                                </div>
                                                <h1>This is why you should hire me...</h1>
                                                <div className="should-hire">
                                                    <p>I’m good at anything just pay me</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="tof-title-image">
                            <h1>Tasker of the Week</h1>
                            <img src={taskers} alt="" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Taskweek