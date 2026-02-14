import './Form.css';
import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: "",
            firstName: "",
            eMail: ""
        };
    }

    update = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    approwe = () => {
        if(this.state.lastName==="" || this.state.firstNameName==="" || this.state.eMail==="") {
            document.getElementById("greeting").style.visibility = "hidden";
            document.getElementById("check").style.visibility = "visibility";

        }
        else {
            document.getElementById("greeting").style.visibility = "visibility";
            document.getElementById("check").style.visibility = "hidden";

        }
    }

    render() {
        const { lastName, firstName, eMail } = this.state;
        return (
            <>
                <form>
                    <div><input value={lastName} name="lastName" placeholder="Фмилия" onChange={this.update} /></div>
                    <div><input value={firstName} name="firstName" placeholder="Имя" onChange={this.update} /></div>
                    <div><input value={eMail} name="eMail" placeholder="Почта" onChange={this.update} /></div>
                    <div><input type="button" value={"Подтвердить"} onClick={this.approve} /></div>
                </form>
                <p id="greeting" style={{visibility:  "hidden"}}>
                    Здравствуйте {lastName} {firstName}, поздравляем Вас с регистрацией.
                    Ваша почта {eMail}
                </p>
                <p id="check" style={{visibility:  "hidden"}}>
                    Проверьте данные.
                </p>
            </>
        );
    }
}

export default Form;