import styled from 'styled-components'

export const Button = styled.button `
  background: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  font-family: Raleway;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 15px;
  width: fit-content;
  padding: 20px 36px 20px;
  border: 2px solid #ffffff;
  margin-top: 30px;
  transition: all .2s ease-out;
`

export const ForwardButton = styled(Button) `
  padding: 20px 36px 13px;

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

export const BackButton = styled(Button) `
  padding: 20px 36px 13px;

  &:before {
    content: url(/icons/arrow-back-outline.svg);
    width: 26px;
    float: left;
    margin-top: -5px;
    margin-right: 18px;
    margin-left: -8px;
    transition: all .2s ease-out;
  }

  &:hover:before {
    transform: translate(-3px, 0);
    margin-right: 27px;
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
  height: ${props => props.small ? "200px" : "350px"};
  transition: transform .2s ease-out;
  display: flex;
  align-items: flex-end;

  @media ${({ theme }) => theme.bp.xs} {
    height: 160px;
    font-size: 0.8rem;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus,
  &:active {
    transform: translate(0, -7px);
  }
`
