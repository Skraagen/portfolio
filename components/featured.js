import Link from 'next/link'
import { ForwardButton } from '../styles/components.js'
import { Grid } from '../styles/layout.js'

export default function FeaturedPosts(props) {
  return (
    <>
      <Grid>
        {props.children}
        <Link href={"posts"}>
          <ForwardButton>View more</ForwardButton>
        </Link>
      </Grid>
    </>
  )
}
