import React from 'react'
import { Link } from 'react-router-dom'
import LinkButton from './LinkButton'
import '../styles/MainPage.css'

class MainPage extends React.Component {
    render() {
        return(
            <div className="mainPageWrap">
                <div className="testWrap">
                    <h1>Welcome, dear friend!</h1>
                    <LinkButton
                        className="back"
                        to='/signin'
                        onClick={(event) => {
                            console.log('custom event here!', event)
                        }}
                    >Back</LinkButton>
                </div>
            </div>
        )
    }
}

export default MainPage