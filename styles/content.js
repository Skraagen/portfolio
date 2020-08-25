import styled from 'styled-components'

export const Title = styled.h1 `
  margin: 0;
  line-height: 1.3;
  font-size: ${({ theme }) => theme.sizes.title};
  color: ${({ theme }) => theme.colors.primary};
`

export const Paragraph = styled.p `
  line-height: 1.5;
  font-size: 1.2rem;
  color: #b5b5b5;
  font-weight: 500;
`
