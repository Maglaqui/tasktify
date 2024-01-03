import React,{useState,useEffect} from 'react'
// css
import '../styles/tasktify.css'
// asset
import deliver from '../assets/deliver-task.jpg'
import Taskfinder from '../taskfinder'

const Tasktify = () => {

// usestate 
const [create,setCreate] = useState(false)

// task btn
const openTask = () => {
    setCreate(true)
}
const closeTask = () => {
    setCreate(false)
}
  return (
    <div className="tasktify-main">
        <div className={`tasktifyCreate ${create}`}>
            <Taskfinder/>
            <div className="autoClosecreate" onClick={closeTask}></div>
        </div>
        <div className="tasktify-container">
            <div className="tasktify-content">
                <section>
                    <div className="tasktify-info-left">
                        <div className="tasktify-info-header">
                            <h1>What is <span>Tasktify</span>?</h1>
                            <p>Tasktify gives both Client and Worker a equal benefits by giving task and receiving payment after the task done</p>
                            <h2>Make your daily activities easier</h2>
                            <p>When there’s no one for you to help. We are here to make you’re task done. Fast, Accurate and Cheap</p>
                        </div>
                        <div className="tasktify-info-btns">
                            <div className="tasktify-create-task">
                                <p>Client Side</p>
                                <button>Create Task</button>
                            </div>
                            <div className="tasktify-take-task">
                                <p>Tasker Side</p>
                                <button onClick={openTask}>Take Task</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="delivery-img">
                        <img src={deliver} alt="" />
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Tasktify