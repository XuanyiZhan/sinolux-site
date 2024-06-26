import React from "react"

import {Subsubtitle} from "../../../../../layouts/title"

import Gallery from "./gallery"
import * as styles from "../../films.module.scss"

const imgWrapper = {
    marginTop: "1em",
    marginRight: "30%",
    width: "12vw",
    border: "2px solid black",
    overflow: "hidden"
}

const Buddha = () => {
    return (
        <div className={styles.container}>
            <div>
                <br/>
                <p className={styles.section}>
                    <Subsubtitle>Buddha Mountain</Subsubtitle>
                    Y: 2010<br/>
                    D: <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm1165953" className={styles.link}>Li Yu</a>
                </p>
                <p className={styles.section}>
                    <span className="bold">Watch / Ticket</span><br/>
                    <a target="_blank" rel="noreferrer" href="https://vimeo.com/ondemand/buddhamountain" className={styles.link}>&rarr; Vimeo</a><br/>
                </p>
                <p className={styles.section}>
                    <span className="bold">Details</span><br/>
                    <div className={styles.detail}>
                        <div>
                            <span className="grey">Category</span><br/>
                            <span>Feature</span>
                        </div>
                        <div>
                            <span className="grey">Length</span><br/>
                            <span>102 min</span>
                        </div>
                        <div>
                            <span className="grey">Genre</span><br/>
                            <span>Drama</span>
                        </div>
                        <div>
                            <span className="grey">Region</span><br/>
                            <span>Mainland China</span>
                        </div>
                        <div>
                            <span className="grey">Language</span><br/>
                            <span>Mandarin</span>
                        </div>
                        <div>
                            <span className="grey">Color</span><br/>
                            <span>Color</span>
                        </div>
                        <div>
                            <span className="grey">Aspect Ratio</span><br/>
                            <span>2.35:1</span>
                        </div>
                    </div>
                </p>
                <p className={styles.section}>
                    <span className="bold">Summary</span><br/>                    
                    Ding Bo and his friends Nan Feng and Fei Zao aka Fatso are a trio of 20-something outsiders who have no intention of sitting exams and getting into universities. When they need a new home, they answer an ad placed by lonely, retired Chinese opera singer Chang Yue Qin, who is mourning the death of her son, and move into her sprawling Chengdu apartment. Right off the bat, the four clash over lifestyle and values, with the bratty trio seeing fit to steal from her and invade her privacy. However, slowly but surely a bond among them develops and everyone eventually learns something from the next.
                </p>
                <p className={styles.section}>
                    <span className="bold">More Info</span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://letterboxd.com/film/buddha-mountain/" className={styles.link}>&rarr; Lettboxd</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://www.imdb.com/title/tt1745713/" className={styles.link}>&rarr; IMDB</a></span><br/>
                    <span><a target="_blank" rel="noreferrer" href="https://movie.douban.com/subject/4059245/" className={styles.link}>&rarr; DOUBAN</a></span><br/>
                </p>
            </div>
            <div>
                <br/>
                <span className="bold">Gallery</span>
                <div style={imgWrapper}>
                    {<Gallery/>}
                </div>
            </div>
        </div>
    )
}

export default Buddha
