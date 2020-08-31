import styled from 'styled-components';

export const Container = styled.div `
  max-width: 1360px;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: ${props => props.center ? "center" : "unset"};

  @media ${({ theme }) => theme.bp.lg} {
    padding: 0 30px;
  }
`

export const Grid = styled.div `
  display: flex;
  align-items: ${props => props.left ? "end" : "center"};
  justify-content: ${props => props.left ? "end" : "center"};
  flex-wrap: wrap;
  margin-top: 3rem;

  @media ${({ theme }) => theme.bp.xs} {
    width: 100%;
  }
`

export const Column = styled.div `
  flex-basis: ${props => props.small ? "25%" : "48%"};

  @media ${({ theme }) => theme.bp.md} {
    flex-basis: ${props => props.small ? "33.3333%" : "48%"};
  }

  @media ${({ theme }) => theme.bp.sm} {
    flex-basis: ${props => props.small ? "50%" : "100%"};
  }
`

export const Section = styled.div `
  width: 100%;
  padding: 90px 0;
`
