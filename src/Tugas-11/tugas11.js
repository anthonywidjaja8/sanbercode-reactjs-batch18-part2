import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props)
        let time = new Date()
        time = time.toLocaleString('ID', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true}).replace(/\./g,":")
        this.state = {
            currentTime: time,
            countDown: 100,
            showTime: true
        }
    }

    componentDidMount() {
        this.currentTime = setInterval(() => this.tick(), 1000)
        this.countDownTime = setInterval(() => this.countDown(), 1000)
    }

    componentDidUpdate() {
        if(this.state.showTime && this.state.countDown === 0) {
            this.stopTime()
            this.hideTime()
        }
    }

    componentWillUnmount() {
        clearInterval(this.countDownTime)
    }

    tick() {
        let time = new Date()
        time = time.toLocaleString('ID', { hour: 'numeric', minute: 'numeric', second:'numeric', hour12: true }).replace(/\./g,":")
        this.setState({ currentTime: time })
    }

    countDown() {
        this.setState({
            countDown: this.state.countDown - 1
        })
    }

    stopTime() {
        this.componentWillUnmount()
    }

    hideTime() {
        this.setState({ showTime: false })
    }

    render() {
        return (
            <>
                {
                    this.state.showTime && (
                        <h2 style={{display: "flex", justifyContent: "space-around"}}>
                            <b><p>sekarang jam : {this.state.currentTime}</p></b>
                            <b><p>hitung mundur : {this.state.countDown}</p></b>
                        </h2>
                    )
                }
            </>
        )
    }
}

export default Timer