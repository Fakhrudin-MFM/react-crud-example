import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from 'reactstrap';

const Example = props => {
  return (
    <Col xs="12" sm="6" md="4" lg="3">
      <Card>
        <CardImg
          top
          width="100%"
          src={props.data.featured_image.source}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle dangerouslySetInnerHTML={{ __html: props.data.title }} />
          <CardText dangerouslySetInnerHTML={{ __html: props.data.excerpt }} />
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Example;
