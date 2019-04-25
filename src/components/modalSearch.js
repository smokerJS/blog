import React from "react"

class ModalSearch extends React.Component {
  state = {
    query : ''
  }

  onChangeQueryHandler = (e) => {
    this.setState({
      query : e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        {
        this.props.show &&
          (
            <article className="modal-area">
              <section>
                <input type="text" value={this.state.query} onChange={(e)=>{this.onChangeQueryHandler(e)}} placeholder={'어차피 찾는거 안나옴ㅋ'} />
                <div>
                  <button onClick={()=>{this.props.toggleFunction(); this.props.search(this.state.query);}}>검색</button>
                </div>
              </section>
            </article>
          )
        }
      </React.Fragment>
    )
  }
}

export default ModalSearch;
