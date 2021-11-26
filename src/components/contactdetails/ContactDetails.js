import React, { Component } from "react";
import './ContactDetails.css';
import { FaMapMarker, FaPhoneSquareAlt, FaEnvelope, FaGlobeAsia, FaPaperPlane } from 'react-icons/fa';
import Recaptcha from 'react-google-recaptcha';
import {CircularProgress} from '@material-ui/core'


class ContactDetails extends Component {
    constructor(props) {
        super(props);

        this.contactSubmit = this.contactSubmit.bind(this);
        this.onloadCallback = this.recaptchaLoaded.bind(this);
        this.verifyBack = this.verifyCallBack.bind(this);

        this.state = {
            captcha: true,
            fields: {},
            errors: {},
            loading: false,
            submitstr: ''
        }

    }

    recaptchaLoaded() {
        console.log('captcha successfully loaded');
    }

    verifyCallBack = (respone) => {
        if(respone){
            this.setState({
                captcha: true,
            });
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "*Name cannot be empty ";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z ]+$/)) {
                formIsValid = false;
                errors["name"] = "*Only letters ";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "*Email cannot be empty ";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "*Email is not valid ";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    handleClick = () => {
        this.setState({loading: true})

        if (this.handleValidation()) {
            if(this.state.isVerified)
            {
                setTimeout(() => {
                    this.setState({submitstr: '*Form submitted'});
                    this.setState({loading: false})
                }, 3000);
            }
            else  
            setTimeout(() => {
                this.setState({submitstr: '*Please verify that you are a human!'});
                this.setState({loading: false})
            }, 1000);
        } 
        else setTimeout(() => {
            this.setState({submitstr: '*Form has errors.'});
            this.setState({loading: false})
        }, 0);
    }

    render() {
        return (
            <div className='container-contact'>
                <table className='contact-table'>
                    <tr>
                        <td className='contact-table'>
                            <div>
                                <h4 className='text-lean'>Would you like to talk</h4>
                                <h4>CONTACT DETAILS</h4>
                                <h5>
                                    <FaMapMarker />
                                    R604, 133 Duong Ba Trac St, Dist.8, HCMC
                                </h5>
                                <h5>
                                    <FaPhoneSquareAlt />
                                    +(84) 349-201-427
                                </h5>
                                <h5>
                                    <FaEnvelope />
                                    hello@saigonfoodtour.com
                                </h5>
                                <h5>
                                    <FaGlobeAsia />
                                    saigonfoodtour.com
                                </h5>
                            </div>
                        </td>
                        <td>
                            <h4 className='text-lean'>Got a question?</h4>
                            <h4>GET IN TOUCH</h4>
                            <div>
                                <form
                                    name="contactform"
                                    className="contactform"
                                    onSubmit={this.contactSubmit.bind(this)}
                                >
                                    <div className="notify-error">
                                    <span style={{ color: "red", fontSize: "16px"}}>{this.state.errors["name"]}</span>
                                    <span style={{ color: "red", fontSize: "16px" }}>{this.state.errors["email"]}</span>
                                    </div>
                                    
                                    <input
                                        refs="name"
                                        type="text"
                                        required="required"
                                        size="32"
                                        placeholder="Name"
                                        onChange={this.handleChange.bind(this, "name")}
                                        value={this.state.fields["name"]}
                                        style={{marginTop:"16px"}}
                                    />
                                    
                                    <input
                                        refs="email"
                                        type="text"
                                        required="required"
                                        size="33"
                                        placeholder="Email"
                                        onChange={this.handleChange.bind(this, "email")}
                                        value={this.state.fields["email"]}
                                        className='textbox'
                                    />
                                    
                                    <br />
                                    <input
                                        refs='subject'
                                        type='text'
                                        required="required"
                                        size="69"
                                        placeholder='Subject'
                                        onChange={this.handleChange.bind(this, "subject")}
                                        style={{marginTop:"16px"}}
                                    />
                                    <br />
                                    <textarea
                                        class="form-control"
                                        rows="7"
                                        required="required"
                                        id="message"
                                        name="data[Contact][content]"
                                        placeholer="Message"
                                        style={{marginTop:"16px"}}
                                    />
                                    <Recaptcha
                                        sitekey="6LcNdVMdAAAAAO42TxW4qVjkDz_cUTpRWDIw8U0n"
                                        render="explicit"
                                        onloadCallback={this.recaptchaLoaded}
                                        verifyCallback={this.verifyCallBack}
                                        style={{marginTop:"16px"}}
                                    />
                                    <button onClick={this.handleClick} loading={this.state.loading} disable={this.state.loading} type='submit' class='btn-send' id='btn send' style={{marginTop:"16px"}}>
                                        <FaPaperPlane/>
                                        {this.state.loading && <CircularProgress size={16} color="inherit" />}
                                        {!this.state.loading && "SEND"}
                                    </button>
                                    <span style={{color:"rgb(12, 141, 102)", fontSize:"14px", display:"block"}}>
                                        {this.state.submitstr}
                                    </span>
                                </form>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default ContactDetails;