import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Pobs = () => (
  <Layout title="Portail Orange B2B">
    <Container>
      <Title>
        Portail Orange Business Sénégal <Badge>2019-</Badge>
      </Title>
      <Paragraph>
      Web portal of free senegal, mobile operator based in Senegal. Website developed by myself.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.orangebusiness.sn/">
          https://www.orangebusiness.sn/ <ExternalLinkIcon mx="2px" />
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

      <WorkImage src="/images/works/portailb2b-min.png" alt="POBS" />
    </Container>
  </Layout>
)

export default Pobs
