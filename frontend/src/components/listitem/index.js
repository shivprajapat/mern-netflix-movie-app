import React, { useEffect, useState } from 'react'
import './style.scss';
import { MdPlayArrow, MdAdd, MdThumbUpAlt, MdThumbDown } from "react-icons/md";
import axios from 'axios';
import { apiUrl } from '../../utils/apiUrl'
import { Link } from 'react-router-dom';

const ListItem = ({ index, item }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});


    // const trailer =
    //     "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"; 

    useEffect(() => {
        try {
            const getMovie = async () => {
                const response = await axios.get(`${apiUrl}/movies/find/` + item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjg4MDAxZThiY2ZkODFmMGNhZTZhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzI0NjEzMSwiZXhwIjoxNjc3Njc4MTMxfQ.uIYXA22V1Qxmhv1APS23_he3aa3RaBbPVkhseD59FsU"
                    }
                })
                setMovie(response.data);
            }
            getMovie()
        } catch (error) {
            console.log(error);
        }
    }, [])
    const { imgSm, trailer, duration, limit, year, desc, genre } = movie;
    return (
        <Link to="/watch" state={{ movie}}>

            <div className="listItem" style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <img src={imgSm} alt="" />
                {isHovered && <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <Link to="/watch">
                                <MdPlayArrow className="icon" />
                            </Link>
                            <MdAdd className="icon" />
                            <MdThumbUpAlt className="icon" />
                            <MdThumbDown className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>{duration}</span>
                            <span className="limit">{limit}</span>
                            <span>{year}</span>
                        </div>
                        <div className="desc">
                            {desc} </div>
                        <div className="genre">{genre}</div>
                    </div>
                </>}
            </div>
        </Link>
    )
}

export default ListItem