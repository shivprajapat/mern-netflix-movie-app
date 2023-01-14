import React from 'react'
import './style.scss';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import ListItem from '../listitem';

const List = () => {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <MdArrowBackIos className="sliderArrow left" />
        <div className="container">
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <MdArrowForwardIos className="sliderArrow right" />
      </div>
    </div>
  )
}

export default List