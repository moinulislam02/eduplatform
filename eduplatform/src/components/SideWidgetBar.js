import { faBook, faBookOpen, faClockRotateLeft, faFlask, faLanguage, faSquareRootVariable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SideWidgetBar() {
  return (
    <div className="col-lg-3 side-widget-bar">
        <div className="box widgets">
            <h5>Trending Topics</h5>
            <ul className="topics">
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faSquareRootVariable} />
                        Mathmatics
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faLanguage} />
                        English
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faFlask} />
                        Science
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faBook} />
                        Literature
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faBookOpen} />
                        Bangla
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faClockRotateLeft} />
                        History
                    </a>
                </li>
            </ul>
        </div>
        <div className="box widgets yourtopics-widgets">
            <h5>Your Topics</h5>
            <ul className="yourtopics">
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faSquareRootVariable} />
                        Mathmatics
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faLanguage} />
                        English
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faFlask} />
                        Science
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faBook} />
                        Literature
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faBookOpen} />
                        Bangla
                    </a>
                </li>
                <li>
                    <a href="">
                        <FontAwesomeIcon icon={faClockRotateLeft} />
                        History
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
