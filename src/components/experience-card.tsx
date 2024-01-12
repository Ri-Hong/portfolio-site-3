/** @jsxImportSource theme-ui */

type ExperienceCardProps = {
  company: string;
  position: string;
  date: string;
  location: string;
  bg: string;
  image: string;
  techstackTags: string[];
  children: React.ReactNode;
};
const baseURL = "/experience-images/"; // Adjust according to your folder structure

const ExperienceCard = ({
  company,
  position,
  date,
  location,
  bg,
  image,
  techstackTags,
  children,
}: ExperienceCardProps) => (
  <div
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: 4,
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-10px)`,
        boxShadow: `xl`,
        cursor: `pointer`,
      },
    }}
  >
    {/* Company Logo */}
    <img
      src={`${baseURL}${image}`}
      alt={company}
      sx={{
        width: `50%`,
        maxWidth: `15rem`,
        right: `1rem`,
        bottom: `-1rem`,
        opacity: 0.25,
        position: `absolute`,
      }}
    />

    <div sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
      {/* Company */}
      <div
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          fontSize: [3, 4, 5],
          fontWeight: `medium`,
          lineHeight: 1.125,
          pb: 2,
        }}
      >
        {company}
      </div>

      {/* Position */}
      <div
        sx={{
          fontSize: [0, 3, 3],
          fontWeight: `medium`,
          lineHeight: 1.125,
          pb: 2,
          fontStyle: `italic`,
        }}
      >
        {position}
      </div>

      <div sx={{display: `flex`, flexDirection: `row`, gap: 3, pt: 1}}>
        {/* Date and Location */}
        <div sx={{fontSize: `0.8rem`, padding: 2, pl: 3, pr: 3, border: `1px solid white`, borderRadius: `20px`}}>{date}</div>
        <div sx={{fontSize: `0.8rem`, padding: 2, pl: 3, pr: 3, border: `1px solid white`, borderRadius: `20px`}}>{location}</div>
      </div>

      <div
        sx={{
          opacity: 0.85,
          textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
          pt: 3,
          p: {
            fontSize: [1, 2],
            color: `white`,
            margin: 0,
            lineHeight: 1.25,
          },
        }}
      >
        {children}
      </div>
    </div>

    {/* Tags */}
    <div sx={{ mt: 2 }}>
      {techstackTags.map((tag) => (
        <span
          key={tag}
          sx={{
            mr: 2,
            fontSize: [1, 2],
            color: `white`,
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ExperienceCard;
