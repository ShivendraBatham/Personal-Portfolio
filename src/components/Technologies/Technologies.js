import React from 'react';
import { DiDatabase, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with various technologies in the wed development world as some of them are: React Js, JavaScript, HTML and CSS, Bootstrap, Rapid API, tailwind CSS, Material UI5. For designing the Frontend of a particular website or application.
    </SectionText>

    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Full Stack Web Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            ReactJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Data Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            MS Word, MS Excel, Spreadsheets
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
