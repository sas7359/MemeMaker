
import React from 'react';
import axios from 'axios';
import { Modal, Form, Button, Image } from 'react-bootstrap';

class UploadPrompt extends React.Component {

    constructor(props) {
        super(props);
        this.state =  {
            imageFile: null,
            image: null,
            title: React.createRef(),
            description: React.createRef(),
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleImageChange(imgFile) {
        const newImageFile = imgFile.target.files[0];
        let fileReader = new FileReader();
        fileReader.onloadend = () => {
            console.log(newImageFile, fileReader.result);
            this.setState({
                imageFile: newImageFile,
                image: fileReader.result,
            })
        }
        fileReader.readAsDataURL(newImageFile);
    }

    handleCancel() {
        this.setState({
            image: null,
        }) 
        this.props.closeUpload();
    }

    handleSubmit() {

        const data = new FormData();
        data.append('file', this.state.imageFile);

        axios.post("http://localhost:8000/upload", data, {}).then(response => {
            console.log(response);
        })

        this.props.closeUpload();
        //this.props.addImage(this.state.image);
        this.props.updateCards(
            "http://localhost:3000/" + this.state.imageFile.name,
            this.state.title.current.value.toString(),
            this.state.description.current.value.toString()
        );
        this.setState({
            imageFile: null,
            image: null,
        }) 
    }

    render() {
        return(
            <Modal show={this.props.show} centered>
                <Form onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <Form.Label>Upload</Form.Label>
                        <Form.Control required
                            id="memeImage"
                            type="file"
                            accept="image/*"
                            onChange={this.handleImageChange}
                        />
                        <Image width={128} height={128} src={this.state.image} fluid/>
                        <br />
                        <Form.Label>Title</Form.Label>
                        <Form.Control required placeholder="Title of meme.." ref={this.state.title} />
                        <Form.Label>Description</Form.Label>
                        <Form.Control required as="textarea" rows="3" placeholder="Description of meme.." ref={this.state.description}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.handleCancel}>Cancel</Button>
                        <Button variant="success" type="submit" >Upload</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }

}

export default UploadPrompt;