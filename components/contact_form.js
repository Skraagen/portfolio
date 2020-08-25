import { Button, Form } from '@styles/components.js'

export default function ContactForm() {
  return (
    <Form>

      <div className="wrap_input rs1_wrap_input validate_input" data-validate="Name is required">
        <span className="label_input">Your Name</span>
        <input className="input" type="text" name="name" placeholder="Enter your name"/>
      </div>

      <div className="wrap_input rs1_wrap_input validate_input" data-validate="Valid email is required: ex@abc.xyz">
        <span className="label_input">Email</span>
        <input className="input" type="text" name="email" placeholder="Enter your email addess"/>
      </div>

      <div className="wrap_input validate_input" data-validate="Message is required">
        <span className="label_input">Message</span>
        <textarea className="input" name="message" placeholder="Your message here..."></textarea>
      </div>

      <div className="container_contact_form_btn">
        <button className="contact_form_btn">
          <span>
            Submit
          </span>
        </button>
      </div>
    </Form>
  )
}
