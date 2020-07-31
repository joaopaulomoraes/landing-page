import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'

import { SectionAuthorsProps } from 'types/api'

const SectionAuthors = ({ title, authors }: SectionAuthorsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map((author) => (
        <ProfileCard
          key={author.name}
          name={author.name}
          role={author.role}
          photo={author.photo}
          socialLinks={author.socialLinks}
          description={author.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAuthors
