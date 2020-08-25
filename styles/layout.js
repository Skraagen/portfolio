import styled from 'styled-components';

export const Container = styled.div `
  max-width: 1160px;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media ${({ theme }) => theme.bp.lg} {
    padding: 0 40px;
  }
`

export const Grid = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;

  @media ${({ theme }) => theme.bp.xs} {
    width: 100%;
  }
`

export const Column = styled.div `
  flex-basis: 48%;

  @media ${({ theme }) => theme.bp.xs} {
    flex-basis: 100%;
  }
`

export const Section = styled.div `
  width: 100%;
  padding: 90px 0;
`
