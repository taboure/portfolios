import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbFree from '../public/images/works/free-min.png'
import thumbBanqueAgricole from '../public/images/works/banqueagricole-min.png'
import thumbPobs from '../public/images/works/portailb2b-min.png'
import thumbPos from '../public/images/works/portailb2c-min.png'
import Paragraph from '../components/paragraph'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <Paragraph>
        Some apps and tools I’ve built or worked on
      </Paragraph>

      <SimpleGrid columns={[1, 1, 2]} gap={6} mt={4}>
        <Section>
          <WorkGridItem id="free" title="Portail FREE SN" thumbnail={thumbFree}>  
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="pobs"
            title="Orange Business Sénégal"
            thumbnail={thumbPobs}
          >
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="ba"
            title="La banque agricole du sénégal"
            thumbnail={thumbBanqueAgricole}
          >
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="osn" thumbnail={thumbPos} title="Portail Orange Sénégal">
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
