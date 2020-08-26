import { Button } from '@styles/components.js'
import { Title } from '@styles/content.js'
import styled, { css } from 'styled-components'

const Form = styled.form `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 30px;
  margin-top: 60px;
  font-weight: 500;
  max-width: 1000px;
`

const Wrapper = styled.div `
  width: ${props => props.small ? "calc((100% - 30px) / 2)" : "100%"};
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 35px;

  @media ${({ theme }) => theme.bp.sm} {
      width: 100%;
  }
`

const Label = styled.span `
  font-size: 15px;
  line-height: 1.5;
  padding-left: 5px;
  color: #afafaf;
  font-weight: 800;
  font-family: Raleway;
  letter-spacing: 1px;
  text-transform: uppercase;
`

const InputStyle = css`
  display: block;
  width: 100%;
  background: transparent;
  font-size: 18px;
  color: #EEEEEE;
  line-height: 1.2;
  padding: 0 5px;
  font-weight: 500;
  font-family: Raleway!important;

  &:-webkit-autofill {
    color: #ffffff!important;
    -webkit-text-fill-color: #f5fff5;
    transition: background-color 5000s ease-in-out 0s;
  }
`

const Input = styled.input `
  ${InputStyle}

  height: 40px;
`

const Textarea = styled.textarea `
  ${InputStyle}

  min-height: 110px;
  padding-top: 9px;
  padding-bottom: 13px;
`

const FormTitle = styled(Title) `
  width: 100%;
  text-align: center;
  margin-bottom: 4rem;
`

export default function ContactForm() {
  return (
    <Form>
      <FormTitle>Contact me</FormTitle>

      <Wrapper small>
        <Label>Your Name</Label>
        <Input type="text" name="name" placeholder="Enter your name"/>
      </Wrapper>

      <Wrapper small>
        <Label>Email</Label>
        <Input type="text" name="email" placeholder="Enter your email addess"/>
      </Wrapper>

      <Wrapper>
        <Label>Message</Label>
        <Textarea name="message" placeholder="Your message here..."></Textarea>
      </Wrapper>

      <Button>Submit</Button>
    </Form>
  )
}
