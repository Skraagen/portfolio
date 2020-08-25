import styled from 'styled-components'

export const Button = styled.button `
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  font-family: Raleway;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 15px;
  width: fit-content;
  padding: 20px 36px 13px;
  border: 2px solid #ffffff;
  margin-top: 30px;
  transition: all .2s ease-out;

  &:after {
    content: url(/icons/arrow-forward-outline.svg);
    width: 26px;
    float: right;
    margin-top: -5px;
    margin-left: 18px;
    margin-right: -8px;
    transition: all .2s ease-out;
  }

  &:hover:after {
    transform: translate(3px, 0);
    margin-left: 27px;
  }
`

export const Card = styled.div `
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  text-decoration: none;
  border-radius: 10px;
  background: #52566e;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 12px 25px #00000038;
  background-size: cover;
  background-position: center;
  height: 350px;
  transition: transform .2s ease-out;
  display: flex;
  align-items: flex-end;

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus,
  &:active {
    transform: translate(0, -7px);
  }
`

export const Form = styled.form `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 30px;
  margin-top: 60px;
  font-weight: 500;
`
