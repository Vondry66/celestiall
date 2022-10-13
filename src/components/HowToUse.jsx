import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const HowToUse = () => {

    const popover = (<Popover id="popover-basic">
    <Popover.Header as="h3">How to use</Popover.Header>
    <Popover.Body>
        In the search bar below, you can search for deep sky objects from the Messier Catalogue by their Messier number e.g M1, or by their name if they have one. <br />
        Simply start typing and choose from the list that appears to perform the search and view the target on the sky map. <br/>
        The clear button will clear your search and return you to the galactic center. <br/>
        Your current target is displayed above the map.
    </Popover.Body>
  </Popover>)

return(
    <div>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button variant="dark" className="mb-1">Read Me!</Button>
        </OverlayTrigger>
  </div>
)
}

export default HowToUse;