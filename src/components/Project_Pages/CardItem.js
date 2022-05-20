import React from 'react';
import {CardActions, Button } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
// import ArticleIcon from '@mui/icons-material/Article';


function CardItem(props) {
    let comp;

    if (props.path !== 'null') {
      comp =  <CardActions>
                <Button size="small">
                  <a href={props.git} style={{color:'Black'}} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                </Button>
                <Button size="small">
                  <a href={props.path} style={{color:'Black'}} target="_blank" rel="noopener noreferrer"><PublicIcon /></a>
                </Button>
              </CardActions>
    } 

    if (props.path === 'paper') {
      comp =  <CardActions>
                <Button size="small">
                  <a href={props.git} style={{color:'Black'}} target="_blank" rel="noopener noreferrer"><PublicIcon /></a>
                </Button>
              </CardActions>
    } 
    
    if (props.path === 'null') {
      comp =  <CardActions>
                <Button size="small">
                  <a href={props.git} style={{color:'Black'}} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                </Button>
              </CardActions>

    }
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.title}</h5>
            <p className='cards__item__text'>{props.text}</p>
            <p3 className='cards__item__text'>{props.tech}</p3>
          </div>
          <div className='cards__item__icon'>
            {comp}
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;