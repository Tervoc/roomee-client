import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



const CollapsePane = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{props.buttonTitle}</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            {props.text}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CollapsePane;

//render(<Example />);
// const CollapsePane = () => {
//     const [open, setOpen] = useState(false);
  
//     return (
//       <>
//         <Button
//           onClick={() => setOpen(!open)}
//           aria-controls="example-collapse-text"
//           aria-expanded={open}
//         >
//           click
//         </Button>
//         <Collapse in={open}>
//           <div id="example-collapse-text">
//             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//             terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//             labore wes anderson cred nesciunt sapiente ea proident.
//           </div>
//         </Collapse>
//       </>
//     );
//   }
//   export default Event;
//   //render(<Example />);