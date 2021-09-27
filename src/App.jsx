import React, { Component } from 'react';
import * as math from 'mathjs'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            calculating: '0',
        }
    }

    handleAC = () => {
        this.setState({
            result: '',
            calculating: '0',
        })
    }

    handleNumber = val => {
        const toString = this.state.calculating.toString()

        if (this.state.calculating === '0') {
            if (val === '.') {
                this.setState({
                    result: toString + '.',
                    calculating: toString + '.'
                })
            } else if (val !== 0) {
                this.setState({
                    result: val,
                    calculating: val
                })
            }
        } else {
            this.setState({
                result: this.state.result.toString() + val,
                calculating: toString + val
            })
        }
    }

    handleAction = act => {
        this.setState({
            result: this.state.result + act,
            calculating: act
        })
    }

    handleEqual = () => {
        // const toString = math.evaluate(this.state.calculating).toString()
        this.setState({
            result: math.evaluate(this.state.result),
            calculating: math.evaluate(this.state.result)
        })
    }

    render() {
        return (
            <div className='app-div'>
                <div className='calculator-div'>
                    <div className='screen-div'>
                        <div className='result-div'>
                            <p className='result-p'>{this.state.result}</p>
                        </div>
                        <div className='calculating-div'>
                            <p className='calculating-p'>{this.state.calculating}</p>
                        </div>
                    </div>
                    <div className='keyboard-div'>
                        <button className='keyboard-button ac-button' onClick={this.handleAC}>AC</button>
                        <button className='keyboard-button action-button' onClick={() => this.handleAction('/')}>/</button>
                        <button className='keyboard-button action-button' onClick={() => this.handleAction('*')}>*</button>

                            <br/>

                        <button className='keyboard-button number-button' onClick={() => this.handleNumber(7)}>7</button>
                        <button className='keyboard-button number-button' onClick={() => this.handleNumber(8)}>8</button>
                        <button className='keyboard-button number-button' onClick={() => this.handleNumber(9)}>9</button>
                        <button className='keyboard-button action-button' onClick={() => this.handleAction('-')}>-</button>

                            <br/>

                        <button className='keyboard-button number-button' onClick={() => this.handleNumber(4)}>4</button>
                        <button className='keyboard-button number-button' onClick={() => this.handleNumber(5)}>5</button>
                        <button className='keyboard-button number-button' onClick={() => this.handleNumber(6)}>6</button>
                        <button className='keyboard-button action-button' onClick={() => this.handleAction('+')}>+</button>

                            <br/>

                        <button className='keyboard-button number-button' onClick={() => this.handleNumber(1)}>1</button>
                        <button className='keyboard-button number-button' onClick={() => this.handleNumber(2)}>2</button>
                        <button className='keyboard-button number-button' onClick={() => this.handleNumber(3)}>3</button>

                            <br/>

                        <button className='keyboard-button number-button zero-button' onClick={() => this.handleNumber(0)}>0</button>
                        <button className='keyboard-button number-button dot-button' onClick={() => this.handleNumber('.')}>.</button>
                        <button className='keyboard-button equal-button' onClick={() => this.handleEqual()}>=</button>
                    </div>
                </div>
                <div className='author-div'>
                    <p className='author-p'>
                        Designed and Coded By
                            <br/>
                        <a target='_blank' className='author-a' href='https://github.com/JakubChoszcz'>Jakub Choszcz</a>
                    </p>
                </div>
            </div>
        );
    }
}
 
export default App;