import React from "react";
import cards from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Player.css"

const Player = ({player}) => {
    console.log(player);
    const {imageUrl, playerName, age, nationality, team, jerseyNumber} = player;
    return (
            <cards style={{backgroundColor: "black", borderStyle: "solid", margin: "10px" }} >
                <cards.Img style={{ width: "18rem", height: "18rem", margin: "10px" }} variant="top" src={imageUrl} alt= {playerName} />
                <cards.Body>
                    <cards.Title style={{backgroundColor: "black", borderStyle: "solid", color: "white" }}>{playerName}</cards.Title>
                    
                    <ListGroup variant="flush" >
                        <ListGroup.Item className="playerDetails">Age : {age}</ListGroup.Item>
                        <ListGroup.Item className="playerDetails" >Nationality : {nationality}</ListGroup.Item>
                        <ListGroup.Item className="playerDetails" >Team : {team}</ListGroup.Item>
                        <ListGroup.Item className="playerDetails">Jersey Number : {jerseyNumber}</ListGroup.Item>
                    </ListGroup>

                </cards.Body>

            </cards>
    );
}

Player.defaultProps = {
                        playerName : "Lionel Messi",
                        team : "Barcelone",
                        nationality : "Argentino",
                        jerseyNumber : "10",
                        age : "37",
                        imageUrl : "/img/Lionel-Messi.jpeg"
                    };



export default Player;