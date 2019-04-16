import React from "react"

class JSAlert extends React.Component {
  state = {
    view : this.props.view || false
  }

  closeHandler = () => {
    this.setState({'view':false});
  }

  render() {
    return (
      <section className={`loading-background ${this.state.view ? 'view' : ''}`}>
        <div>
          <strong>{this.props.text}</strong>
          <button onClick={()=>{this.closeHandler()}}>닫기</button>
        </div>
      </section>
    )
  }
}

export default JSAlert
