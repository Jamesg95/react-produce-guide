import React, { Component } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../assets/css/hero.css'

class Hero extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid className='hero'>
                    <Container fluid>
                        <div className='row'>
                            <div className='col'>
                                <h1 className='display-3'>My hero title</h1>
                                <p className='lead '>my hero description</p>
                                <Link to='/about'><Button outline color='primary' size='lg'>CTA BUTTON</Button></Link>
                            </div>
                        </div>
                    </Container>
                    
                </Jumbotron>
            </div>
        )
    }
}

export default Hero
