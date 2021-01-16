import React, { Component } from 'react'
import './ColorBox.css'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import chroma from 'chroma-js'

class ColorBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            copied: false
        };
    }

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500)
        })
    }

    render() {
        const { name, background, moreUrl, showLink } = this.props
        const { copied } = this.state
        const isDark = chroma(background).luminance() <= 0.06
        const isLight = chroma(background).luminance() >= 0.6
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className="ColorBox" style={{ background }} >
                    <div
                        className={`copy-overlay ${copied && 'show'}`}
                        style={{ background }}
                    />
                    <div className={`copy-msg ${copied && 'show'} ${isLight && 'dark-msg'}`}>
                        <h1>Copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDark && "light-text"}>{name}</span>
                        </div>

                        <button className={`copy-button ${isLight && "dark-msg"}`}> Copy </button>

                    </div>
                    {showLink && (
                        <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                            <span className={`see-more ${isLight && 'dark-msg'}`}>More</span>
                        </Link>
                    )}


                </div >
            </CopyToClipboard >

        )
    }
}

export default ColorBox