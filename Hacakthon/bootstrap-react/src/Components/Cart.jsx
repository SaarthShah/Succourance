import React from 'react';
import{ Card,Badge,Button} from 'react-bootstrap';

export function Cart({data, setOrdered}) {
    return (
        
        <Card className ="shadow-sm bg-white rounded">
  
        <Card.Img variant="top" src={data.image} />
        
        
        <Card.Body className="w-40 d-flex flex-column">
            <div className="d-flex mb-2 justify-content-between">
            </div><Card.Title className="mb-0 font-weight-bold">{data.name}
                </Card.Title>
                <Card.Text className="text-secondary">{data.desc}</Card.Text>
                <Button 
                       onClick={()=> setOrdered()} 
               className="mt-auto font-weight-bold"
               variant="success"
               block>
                   Book Service
                   </Button> </Card.Body>    
        </Card>
    )
}