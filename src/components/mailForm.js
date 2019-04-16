// import PropTypes from "prop-types";
import React from "react";
import Loading from "@components/loading";
import JSAlert from "@components/jsAlert";
class MailForm extends React.Component {

  state = {
    name: '',
    phone: '',
    email: '',
    content: '',
    honeypot: '',
    loading: false,
    alert: false
  }

	setStateHandler = (e,name) => {
		this.setState({[name]: e.target.value});
  }

  onSubmitHandler = () => {
    let msg = '';
    let err = false;

    !err &&
      !this.state.name &&
      (msg = '키미노 나마에와!?') &&
      (err = true);

    !err &&
      !(this.state.phone || this.state.email) &&
      (msg = '어디로 답장할지는 알려줘야지!!!') &&
      (err = true);

    !err &&
      !this.state.content &&
      (msg = '아무거나 일단 끄적여봐 내용이 없어 내용이 에휴') &&
      (err = true);

    !err &&
      this.state.honeypot &&
      (msg = '더러운 로봇아 죽어라!!') &&
      (err = true);

		err && alert(msg);
		!err && this.submitEmail();
  }

  submitEmail = () => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('phone', this.state.phone);
    formData.append('email', this.state.email);
    formData.append('content', this.state.content);
    this.setState({
      loading: true
    })
    const $this = this;
    xhr.onload = function() {
      if (xhr.status === 200 || xhr.status === 201) {
        alert('보내져따 헤헤헤헿');
        $this.setState({
          name: '',
          phone: '',
          email: '',
          content: '',
          honeypot: '',
          loading: false
        })
      } else {
        //console.error(xhr.responseText);
        alert('에러야 에러!! \nsmokerjs.dev@gmail.com 여기로 직접 보내줭!');
      }
    };
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbwy5GQZ4OXPQ75fe7hd-rUDZAOv_RPcwcxQpAAKn-PGj9TtDJU/exec');
    xhr.send(formData);
  }

  alertClick = () => {
    this.setState({'alert':true});
  }

  render() {
    return (
      <React.Fragment>
      <section className="section-mail-form">
        <article className="article-mail-form">
          <div className="requset-info">
            <h2>너는 누구냐</h2><button onClick={()=>{this.alertClick()}}>버튼테스트</button>
            <label htmlFor="name">
              <strong>이름</strong>
              <input type="text" defaultValue={this.state.name} value={this.state.name} onChange={(e)=>{this.setStateHandler(e,'name')}} name="name"/>
            </label>
            <label htmlFor="phone">
              <strong>핸드폰</strong>
              <input type="text" defaultValue={this.state.phone} value={this.state.phone} onChange={(e)=>{this.setStateHandler(e,'phone')}} name="phone"/>
            </label>
            <label htmlFor="email">
              <strong>이메일</strong>
              <input type="text" defaultValue={this.state.email} value={this.state.email} onChange={(e)=>{this.setStateHandler(e,'email')}} name="email"/>
            </label>
          </div>
          <div className="requset-content">
            <h2>정성스레 적어도 어차피 안봄ㅋ</h2>
            <textarea name="content" defaultValue={this.state.content} value={this.state.content} onChange={(e)=>{this.setStateHandler(e,'content')}}></textarea>
            <button onClick={()=>{this.onSubmitHandler()}}>보내기</button>
            <input id="honeypot" type="text" name="honeypot" defaultValue={this.state.honeypot} value={this.state.honeypot} onChange={(e)=>{this.setStateHandler(e,'content')}}/>
          </div>
        </article>
      </section>
      <Loading view={this.state.loading}/>
      <JSAlert view={this.state.alert} text="테스트"/>
      </React.Fragment>
    )
  }
}

// MailForm.propTypes = {

// }

// MailForm.defaultProps = {

// }

export default MailForm;
