import React from 'react';
import Loading from '@components/loading';
import Alert from '@components/modal/alert';
import { connect } from 'react-redux';
import { toggleModalView } from '@state/app';

class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      content: '',
      honeypot: '',
      loading: false,
      alert: {
        text: '',
      },
    };
    this.props.dispatch(toggleModalView(false));
  }

  setStateHandler = (e, name) => {
    this.setState({ [name]: e.target.value });
  }

  onSubmitHandler = () => {
    let msg = '';
    let err = false;

    !err
      && !this.state.name
      && (msg = '키미노 나마에와!?')
      && (err = true);

    !err
      && !(this.state.phone || this.state.email)
      && (msg = '어디로 답장보내까!?')
      && (err = true);

    !err
      && !this.state.content
      && (msg = '내용이 없어짜나아!!!')
      && (err = true);

    !err
      && this.state.honeypot
      && (msg = '더러운 로봇아 죽어라!!')
      && (err = true);

    err && this.modalToggleHandler(msg);
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
      loading: true,
    });
    const $this = this;
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        $this.modalToggleHandler('보내져따 헤헤흐헤');
        $this.setState({
          name: '',
          phone: '',
          email: '',
          content: '',
          honeypot: '',
          loading: false,
        });
      } else {
        // console.error(xhr.responseText);
        $this.modalToggleHandler(
          '에러야 에러!! \nsmokerjs.dev@gmail.com 여기로 직접 보내줘!',
        );
      }
    };
    xhr.open(
      'POST',
      'https://script.google.com/macros/s/AKfycbwy5GQZ4OXPQ75fe7hd-rUDZAOv_RPcwcxQpAAKn-PGj9TtDJU/exec',
    );
    xhr.send(formData);
  }

  modalToggleHandler = (text = '') => {
    this.setState({ alert: { text } });
    this.props.dispatch(toggleModalView(!this.props.isModalView));
  }

  render() {
    return (
      <React.Fragment>
        <section className="section-mail-form">
          <article className="article-mail-form">
            <div className="requset-info">
              <h2>너는 누구냐</h2>
              <label htmlFor="name">
                <strong>이름</strong>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={(e) => {
                    this.setStateHandler(e, 'name');
                  }}
                  name="name"
                />
              </label>
              <label htmlFor="phone">
                <strong>핸드폰</strong>
                <input
                  type="text"
                  value={this.state.phone}
                  onChange={(e) => {
                    this.setStateHandler(e, 'phone');
                  }}
                  name="phone"
                />
              </label>
              <label htmlFor="email">
                <strong>이메일</strong>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={(e) => {
                    this.setStateHandler(e, 'email');
                  }}
                  name="email"
                />
              </label>
            </div>
            <div className="requset-content">
              <h2>정성스레 적어도 어차피 안봄ㅋ</h2>
              <textarea
                name="content"
                value={this.state.content}
                onChange={(e) => {
                  this.setStateHandler(e, 'content');
                }}
              />
              <button
                onClick={() => {
                  this.onSubmitHandler();
                }}
              >
                보내기
              </button>
              <input
                id="honeypot"
                type="text"
                name="honeypot"
                value={this.state.honeypot}
                onChange={(e) => {
                  this.setStateHandler(e, 'content');
                }}
              />
            </div>
          </article>
        </section>
        <Loading view={this.state.loading} />
        <Alert text={this.state.alert.text} />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ isModalView: state.app.isModalView }),
  null,
)(MailForm);
