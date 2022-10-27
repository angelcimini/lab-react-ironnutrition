import { Card, Row, Col, Divider, Input, Button } from 'antd';


export default function FoodBox({ food }) {
    
    return( food.map(element => {
        const foodId =  Math.floor(Math.random()*10*1000*1000);
        return(
            <Col key={foodId}>
                <Card
                    title={element.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                >
                    <img src={element.image} height={60} alt="food" />
                    <p>Calories: {element.calories} </p>
                    <p>Servings: {element.servings} </p>
                    <p><b>Total Calories: {element.calories * element.servings} </b> kcal</p>
                    <Button type="primary"> Delete </Button>
                </Card>
            </Col>
        )
    }))
}