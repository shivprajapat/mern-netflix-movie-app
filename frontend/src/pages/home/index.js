import React, { useEffect, useState } from 'react'
import Featured from '../../components/featured';
import List from '../../components/list';
import Navbar from '../../components/Navbar';
import './style.scss';
import axios from 'axios'
import { apiUrl } from '../../utils/apiUrl'
const Home = ({ type }) => {


  const [list, setList] = useState([])
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`${apiUrl}/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""
          }`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjg4MDAxZThiY2ZkODFmMGNhZTZhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzI0NjEzMSwiZXhwIjoxNjc3Njc4MTMxfQ.uIYXA22V1Qxmhv1APS23_he3aa3RaBbPVkhseD59FsU"
          }
        })
        setList(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getRandomLists()
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {
        list?.map((item, i) => <List list={item} key={i} />
        )
      }
    </div>
  )
}

export default Home