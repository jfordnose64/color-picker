import React, { Component } from 'react'

export class Sliders extends Component {
  state = {
    hue: Math.floor(Math.random() * 360),
    saturation: Math.floor(Math.random() * 100),
    lightness: Math.floor(Math.random() * 100),
    alpha: Math.random().toFixed(1)
  }

  hueInput = event => {
    if (event.target.value) {
      this.setState({
        hue: event.target.value
      })
    }
    console.log(this.state.hue)
  }

  satInput = event => {
    if (event.target.value) {
      this.setState({
        saturation: event.target.value
      })
    }
    console.log(this.state.saturation)
  }

  lightInput = event => {
    if (event.target.value) {
      this.setState({
        lightness: event.target.value
      })
    }
    console.log(this.state.lightness)
  }

  alphaInput = event => {
    if (event.target.value) {
      this.setState({
        alpha: event.target.value
      })
    }
    console.log(this.state.alpha)
  }

  randomColor = () => {
    this.setState({
      hue: Math.floor(Math.random() * 360),
      saturation: Math.floor(Math.random() * 100),
      lightness: Math.floor(Math.random() * 100),
      alpha: Math.random().toFixed(1)
    })
  }

  render() {
    return (
      <main
        style={{
          backgroundColor: `hsl(${this.state.hue}, ${this.state.saturation}%, ${
            this.state.lightness
          }%, ${this.state.alpha})`
        }}
      >
        <h1 className="header">Pick a color!</h1>
        <section className="sliders">
          <div className="hue-container">
            <h2>Hue</h2>
            <input
              type="range"
              min="1"
              max="360"
              value={this.state.hue}
              className="hue"
              onChange={this.hueInput}
            />
            <p>{this.state.hue}</p>
          </div>
          <div className="saturation">
            <h2>Saturation</h2>
            <input
              type="range"
              min="1"
              max="100"
              value={this.state.saturation}
              className="sat"
              onChange={this.satInput}
            />
            <p>{this.state.saturation}</p>
          </div>
          <div className="lightness">
            <h2>Lightness</h2>
            <input
              type="range"
              min="1"
              max="100"
              value={this.state.lightness}
              className="light"
              onChange={this.lightInput}
            />
            <p>{this.state.lightness}</p>
          </div>
          <div className="alpha">
            <h2>Alpha</h2>
            <input
              type="range"
              min="0"
              max="0.9"
              value={this.state.alpha}
              step={0.1}
              className="alpha-input"
              onChange={this.alphaInput}
            />
            <p>{this.state.alpha}</p>
          </div>
        </section>
        <div>
          <button
            className="random-color"
            type="button"
            onClick={this.randomColor}
          >
            Random color
          </button>
        </div>
      </main>
    )
  }
}

export default Sliders
