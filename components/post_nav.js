import styled from 'styled-components'
import { Container } from '@styles/layout'
import { FunctionComponent } from 'react';
import Link from 'next/link'

const Wrapper = styled.div `
  width: 100%;
  padding: 0 0 24px;
  background: #c1b2dd1f;
`

const Controls = styled.div `
  display: flex;
  max-width: 1000px;
  width: 100%;
`

const Control = styled.div `
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
  margin-top: 30px;
  transition: all .2s ease-out;
  flex-basis: 50%;
  text-align: center;
  transition: all .2s ease-out;

  @media ${({ theme }) => theme.bp.xs} {
    color: transparent;
    font-size: 1px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const ForwardControl = styled(Control) `
  padding: 20px 36px 13px;
  text-align: right;

  &:after {
    content: url(/icons/grid.svg);
    width: 26px;
    float: right;
    margin-top: -5px;
    margin-left: 18px;
    margin-right: -8px;
    filter: invert(1);
  }
`

const BackControl = styled(Control) `
  padding: 20px 36px 13px;
  text-align: left;

  &:before {
    content: url(/icons/home.svg);
    width: 26px;
    float: left;
    margin-top: -5px;
    margin-right: 18px;
    margin-left: -8px;
    filter: invert(1);
  }
`

export default function PostNav(props) {
  const type = props.type;
  if (type == "post") {
    return (
      <Wrapper>
        <Container center>
          <Controls>
            <Link scroll={false} href="/#fromPosts"><BackControl>Return home</BackControl></Link>
            <Link scroll={false} href="/posts"><ForwardControl>All projects</ForwardControl></Link>
          </Controls>
        </Container>
      </Wrapper>
    )
  } else if (type == "all") {
    return (
      <Wrapper>
        <Container center>
          <Controls>
            <Link scroll={false} href="/#fromPosts"><BackControl>Return home</BackControl></Link>
          </Controls>
        </Container>
      </Wrapper>
    )
  }
}
