import React, { useEffect, useState } from 'react'
import './style.scss';
import { MdPlayArrow, MdInfoOutline } from "react-icons/md";
import axios from "axios";
import { apiUrl } from '../../utils/apiUrl'

const Featured = ({ type }) => {
    const [content, setContent] = useState({});
    useEffect(() => {
        const getRandomContent = async () => {
            try {
                const res = await axios.get(`${apiUrl}/movies/random?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjhiYzU5ZTYyYjFlYTI4ZGIxMDE3OCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzcyNDU2NTIsImV4cCI6MTY3NzY3NzY1Mn0.MBEONjU_JxhBNhlIp1o9pQCPWmaEvs78gqcBewFsw7M"
                    }
                })
                setContent(res.data[0])
            } catch (error) {
                console.log(error);
            }
        }
        getRandomContent()
    }, [type])
    console.log({ content });

    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt="" />

            <div className="info">
                <img src={content.imgTitle} alt="" />
                <span className="desc">{content.desc}</span>
                <div className="buttons">
                    <button className="play">
                        <MdPlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <MdInfoOutline />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured