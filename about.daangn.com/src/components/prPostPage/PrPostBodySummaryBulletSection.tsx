import { PrismicRichText } from '@prismicio/react';
import { vars } from '@seed-design/design-token';
import { styled } from 'gatsby-theme-stitches/src/config';
import { rem } from 'polished';
import * as React from 'react';

type PrPostBodySummaryBulletSection = {
  slice: GatsbyTypes.PostSummaryBulletSection;
};

const PrPostBodySummaryBulletSection: React.FC<PrPostBodySummaryBulletSection> = ({ slice }) => {
  return (
    <Container>
      <PrismicRichText
        field={slice.primary.summary_bullet_content}
        components={{
          paragraph: ({ children, key }) => <Paragraph key={key}>{children}</Paragraph>,
          list: ({ children, key }) => <UList key={key}>{children}</UList>,
          strong: ({ children, key }) => <Strong key={key}>{children}</Strong>,
        }}
      />
    </Container>
  );
};

const Container = styled('section', {
  width: '100%',
  marginTop: rem(20),
  marginBottom: rem(40),
  fontSize: vars.$scale.dimension.fontSize150,

  '@sm': {
    marginTop: rem(40),
    fontSize: vars.$scale.dimension.fontSize200,
  },
});

const UList = styled('ul', {
  lineHeight: rem(25),
  paddingInlineStart: rem(20),

  '@sm': {
    lineHeight: rem(30),
  },
});

const Strong = styled('strong', {
  fontWeight: 700,
});

const Paragraph = styled('p', {
  lineHeight: rem(25),

  '@sm': {
    lineHeight: rem(30),
  },
});

export default PrPostBodySummaryBulletSection;
