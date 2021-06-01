import React from 'react';
import emailjs from 'emailjs-com';

import Hero from "../components/Hero";
import Content from "../components/Content";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import './ContactUs.css';

function ContactUs(props) {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_EiHuzOWwHrbBRaArOArbE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <Form className="contact-form" onSubmit={sendEmail}>
                    <Form.Control type="hidden" name="contact_number"></Form.Control>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="user_name"></Form.Control>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="user_email"></Form.Control>
                    <Form.Label>Message</Form.Label>
                    {/* <textarea name="message" /> */}
                    <Form.Control as="textarea" rows={3} />
                    <br />
                    <Form.Row>
                        <Button type="submit" value="Send" >Send</Button>
                    </Form.Row>
                </Form>
            </Content>
        </div >


        // <form className="contact-form" onSubmit={sendEmail}>
        //     <input type="hidden" name="contact_number" />
        //     <label>Name</label>
        //     <input type="text" name="user_name" />
        //     <label>Email</label>
        //     <input type="email" name="user_email" />
        //     <label>Message</label>
        //     <textarea name="message" />
        //     <input type="submit" value="Send" />
        // </form>
    );
}


// import React from 'react'

// import Hero from "../components/Hero";
// import Content from "../components/Content";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Axios from 'axios';

// class ContactPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: '',
//             email: '',
//             message: '',
//             disabled: false,
//             emailSent: null,
//         }

//     }
//     handleChange = (event) => {
//         console.log(event);

//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();

//         this.setState({
//             disabled: true

//         });

//         Axios.post('http://localhost:3030/api/email', this.state)
//             .then(res => {
//                 if (res.data.success) {
//                     this.setState({
//                         disabled: false,
//                         emailSent: true
//                     });
//                 } else {
//                     this.setState({
//                         disabled: false,
//                         emailSent: false
//                     });
//                 }
//             })
//             .catch(err => {
//                 this.setState({
//                     disabled: false,
//                     emailSent: false
//                 })

//             }
//             )
//     }

//     render() {

//         return (
//             <div>
//                 <Hero title={this.props.title} />

//                 <Content>
//                     <Form onSubmit={this.handleSubmit}>
//                         <Form.Group>
//                             <Form.Label htmlFor="full-name">Full Name</Form.Label>
//                             <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}></Form.Control>
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Label htmlFor="email">Email</Form.Label>
//                             <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}></Form.Control>
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Label htmlFor="message">Message</Form.Label>
//                             <Form.Control id="message" name="message" as="textarea" value={this.state.message} onChange={this.handleChange}></Form.Control>
//                         </Form.Group>

//                         <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
//                             Send
//                         </Button>

//                         {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
//                         {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
//                     </Form>
//                 </Content>
//             </div>
//         )
//     }
// }

// export default ContactPage
export default ContactUs;