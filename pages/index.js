import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BioEducation, BioEducationYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
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
          <p>Web developer </p>
          <List>
            <ListItem>
            <Link href="https://github.com/taboure" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
              </Button>
            </Link>
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
      <Box
        borderRadius="lg"
        mb={6}
        mt={{ base: 1, md: 4 }}
        p={3}
        textAlign="center"
        bgGradient={useColorModeValue('linear(to-r, green.200, pink.500)', 'linear(to-r, green.200, pink.500)')}
      >
      ???? Hello, I&apos;am Mamadou Taboure AGNE web developer based in Senegal!
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;am a developer based in Senegal with 4 years of experience, I&apos;am
          passioned for building digital services/stuff he wants. {' '}
          I spend my whole day, practically every day, experimenting with PHP, HTML, CSS, and JavaScript.
          I???m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction
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
          Saleforce developer at T??ranga Cloud Solution
          <em>(Jan - Apr)</em>
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Drupal developer at People Input 
          <em>(Mai - Nov)</em>
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Drupal developer at Orange - Sonatel 
          <em>(Dec - Now)</em>
        </BioSection>
      </Section>

    </Container>
  </Layout>
)

export default Page
