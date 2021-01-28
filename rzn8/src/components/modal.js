import React from 'react'


function PrintModal(){
        const[show, setShow] =
        useState(false);
        
        const handleClose = () =>
        setShow(false);
        const handleShow = ()=>
        setShow(true);
    
    
    return(
            <>
            <Button variant = 'primary'
            onClick={handleShow}>
                Printing Services
            </Button>

            <Modal Show ={show}
            onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Text</Modal.Body>
                <Modal.Footer>
                    <Button variant ="secondary"
                    onClick ={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            </>
        )
};


render(<PrintModal/>) 
