import Link from 'next/link'
import { Button } from '../styles/components.js'
import { Grid } from '../styles/layout.js'

export default function FeaturedPosts(props) {
  return (
    <>
      <Grid>
        {props.children}
        <Link href={"posts"}>
          <Button>View more</Button>
        </Link>
      </Grid>
    </>
  )
}
