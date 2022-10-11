import React from "react";
import style from './styles/form.module.css';
import Notification from "./Notification";

class Form extends React.Component {
    state = {
        showNotification: false,
    } 

    Submit = (e) => {
        e.preventDefault();
        e.target.reset();
        this.setState({showNotification: true});
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        const{from, to, transport, date, email, showNotification} = this.state;
   
        return (
            <>
            <p className={style.paragraph}>Заполните форму, если не нашли нужных билетов</p>
            <form className={style.form} onSubmit = {this.Submit}>
                <input
                type ='text'
                name ='from'
                placeholder ='Откуда'
                onChange = {this.handleChange}
                />
                 <input
                type ='text'
                name ='to'
                placeholder ='Куда'
                onChange = {this.handleChange}
                />
                 <input
                type ='text'
                name ='transport'
                placeholder ='Каким транспортом воспользуетесь'
                onChange = {this.handleChange}
                />
                 <input
                type ='text'
                name ='date'
                placeholder ='Когда отправляетесь'
                onChange = {this.handleChange}
                />
                <input
                type = 'email'
                name = 'email'
                placeholder = 'Ваш Email' 
                onChange = {this.handleChange}
                />            
                <button className={style.submit}>Отправить</button>
            </form>
               <div>{showNotification && (
                <Notification from = {from} to = {to} transport = {transport} date = {date} email = {email}/>
                )}
                </div> 

            </>
    ) 
    } 
}

export default Form;