import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Free = () => (
  <Layout title="Free Sénégal">
    <Container>
      <Title>
        Free Sénégal <Badge>2019-</Badge>
      </Title>
      <Paragraph>
      Web portal of free senegal, mobile operator based in Senegal. Website developed by myself.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.free.sn/">
            https://www.free.sn/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Drupal8, javascript</span>
        </ListItem>

      </List>

      <WorkImage src="/images/works/free-min.png" alt="Free" />
    </Container>
  </Layout>
)

export default Free
