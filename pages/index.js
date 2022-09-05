import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BioEducation, BioEducationYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoGitlab,
  IoLogoLinkedin,
  IoLogoMedium
} from 'react-icons/io5'

const Page = () => (
  <Layout>
    <Container>
      <Box marginTop={5} display={{ md: 'flex' }}>
        <Box
            flexGrow={1}
          >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={1}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/moomo.png"
            alt="Profile image"
          />
        </Box>
        <Box 
          flexShrink={0}
          ml={{ md: 2 }}
          mt={{ base: 4, md: 0 }}
          textAlign="center"
          >
          <Heading as="h2" variant="page-title">
            Mamadou T. AGNE
          </Heading>
          <p>Full Stack developer </p>
          <List>
            <ListItem>
            <Link href="https://www.linkedin.com/in/mamadou-agne-/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
              </Button>
            </Link>
            <Link href="https://gitlab.com/moomoagne" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGitlab} />}
              >
              </Button>
            </Link>
            <Link href="https://twitter.com/mooagne" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
              </Button>
            </Link>
            <Link href="https://medium.com/@moomoagne" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoMedium} />}
              >
              </Button>
            </Link>
          </ListItem>
          </List>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        👋 I&apos;am a developer based in Senegal with more than 5 years of experience, 
          I spend my whole day doing PHP, HTML, CSS and JavaScript. 
          I&apos;am curious and enjoy work that challenges me to learn something new and point me in a different direction
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button 
              rightIcon={<ChevronRightIcon />} 
              bgGradient="linear(to-r, teal.500, green.500)"
              _hover={{
                bgGradient: "linear(to-r, green.200, pink.500)",
              }}
              >
              Go to my works
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioEducation>University of Thies</BioEducation>
          <BioEducationYear>2014 - 2015</BioEducationYear>
          Master 2 Computer science in network and telecom
        </BioSection>
        <BioSection>
          <BioEducation>University of Thies</BioEducation>
          <BioEducationYear>2013 - 2014</BioEducationYear>
          Master 1 Computer Science
        </BioSection>
        <BioSection>
          <BioEducation>University of Thies</BioEducation>
          <BioEducationYear>2012 - 2013</BioEducationYear>
          Bachelor of Computer Engineering
        </BioSection>
        <BioSection>
          <BioEducation>Mauris Delafosses High school</ BioEducation>
          <BioEducationYear>2009 - 2010</BioEducationYear>
          Baccalaureate in experimental science S2
        </BioSection>
        <Heading as="h3" variant="section-title">
          Employment
        </Heading>
        <BioSection>
          <BioYear>2016</BioYear>
          Consultant at DSI of Thies University
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Web developer at Qualshore
          <em>2 years</em>
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Saleforce developer at Téranga Cloud Solution
          <em>(Jan - Apr)</em>
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Drupal developer at People Input 
          <em>(Mai - Nov)</em>
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Full Stack developer at Orange Sonatel
          <em>(Dec 2019 - Now)</em>
        </BioSection>
      </Section>

    </Container>
  </Layout>
)

export default Page
