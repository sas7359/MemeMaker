import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Page imports
import Home from '../pages/Home';
import Library from '../pages/Library';
import Editor from '../pages/Editor';

class SiteContainer extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = sessionStorage.getItem("globalState") ? JSON.parse(sessionStorage.getItem("globalState")) : {
            imageBlobs: [],
        }
        const setStateOverride = this.setState;
        this.setState = function() {
            // eslint-disable-next-line
            let updateArg = () => (arguments[1], sessionStorage.setItem('globalState', JSON.stringify(this.state)));
            setStateOverride.bind(this)(arguments[0], updateArg);
        }
        this.addNewImageBlob = this.addNewImageBlob.bind(this);
    }

    addNewImageBlob(image) {
        const newState = {}
        newState.imageBlobs = this.state.imageBlobs;
        const newImage = URL.createObjectURL(image);
        newState.imageBlobs.push(newImage);
        this.setState(newState);
        return newImage;
    }

    render() {
        return (
            <div className="App">
                <Container variant="light">
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/library' component={() => <Library addImage={this.addNewImageBlob}></Library>}></Route>
                        <Route path='/editor' component={Editor}></Route>
                    </Switch>
                </Container>
            </div>
        );
    }

}

export default SiteContainer;