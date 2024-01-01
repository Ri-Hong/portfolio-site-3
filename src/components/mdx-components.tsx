import * as React from "react"
import ProjectCard from "./project-card"
import ExperienceCard from "./experience-card"

const MdxComponents = {
  ProjectCard: ({ link, title, bg, children, ...props }: any) => (
    <ProjectCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  ExperienceCard: ({ company, position, date, bg, children, ...props }: any) => (
    <ExperienceCard {...props} company={company} position={position} date={date} bg={bg}>
      {children}
    </ExperienceCard>
  ),
}

export default MdxComponents


