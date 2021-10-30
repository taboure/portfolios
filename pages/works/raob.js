import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Raob = () => (
  <Layout title="RAOB">
    <Container>
      <Title>
      Le « Réseau Africain des Organismes de Bassin (RAOB) » <Badge>2019-</Badge>
      </Title>
      <Paragraph>
      Le « Réseau Africain des Organismes de Bassin (RAOB) »
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.anbo-raob.org/">
          https://www.anbo-raob.org/ <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/raob-min.png" alt="RAOB" />
    </Container>
  </Layout>
)

export default Raob
