import React from 'react';
import { 
  Card, CardText, CardBody,  
  CardTitle, CardSubtitle 
} from 'reactstrap';

function MemberCard(props) {
  const handleClick = event => {
    props.setMemberToEdit(props.member);
    props.setIsEditing(true);
  };

  return (
    <Card>
      <CardBody>
        <CardTitle><h3>{props.member.name}</h3></CardTitle>
        <CardSubtitle><p>{props.member.email}</p></CardSubtitle>
        <CardText>{props.member.role}</CardText>
        <button onClick={handleClick}>Edit</button>
        {props.member.isAdmin ? <p>admin</p> : null}
      </CardBody>
    </Card>
  );
}

export default MemberCard; 