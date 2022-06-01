import React from 'react';
import {CardActions, Button } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
import { Link } from 'react-router-dom';


function CardItem(props) {
    let comp;

    if (props.path !== 'null') {
      comp =  <CardActions>
                <Button className='button_icon' size="small">
                  <a href={props.git} style={{color:'Black'}} target="_blank" rel="noopener noreferrer"></a>
                </Button>
                <Button className='button_icon' size="small">
                  <a href={props.path} style={{color:'Black'}} target="_blank" rel="noopener noreferrer"></a>
                </Button>
              </CardActions>
    } 

    if (props.path === 'paper') {
      comp =  <CardActions>
                <Button className='button_icon' size="small">
                  <a href={props.git} style={{color:'Black'}} target="_blank" rel="noopener noreferrer"></a>
                </Button>
              </CardActions>
    } 
    
    if (props.path === 'null') {
      comp =  <CardActions>
                <Button className='button_icon' size="small">
                  <a href={props.git} style={{color:'Black'}} target="_blank" rel="noopener noreferrer"></a>
                </Button>
              </CardActions>
    }

    if (props.path === 'nullnull') {
      comp =  <></>
    }
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.path} color="black">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Cover Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h1 style={{fontSize: '1em', marginTop: '-10px'}}>{props.title}</h1>
            <p className='cards__item__text'>{props.text}</p>
            <p3 className='cards__item__text'>{props.tech}</p3>
          </div>
          {/* <div className='cards__item__icon'>
            {comp}
          </div> */}
        </a>
      </li>
    </>
  );
}

export default CardItem;