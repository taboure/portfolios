import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Ba = () => (
  <Layout title="Banque agricole du sénégal">
    <Container>
      <Title>
      LA BANQUE AGRICOLE <Badge>2019-</Badge>
      </Title>
      <Paragraph>
      A dense network of more than 35 agencies distributed in all regions of Senegal; An offer of adapted and innovative financial products and services
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.labanqueagricole.sn/">
          https://www.labanqueagricole.sn/<ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/banqueagricole-min.png" alt="Banque agricole" />
    </Container>
  </Layout>
)

export default Ba
