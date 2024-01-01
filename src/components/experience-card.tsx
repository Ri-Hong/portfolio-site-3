/** @jsxImportSource theme-ui */

type ExperienceCardProps = {
    company: string;
    position: string;
    date: string;
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
    bg,
    image,
    techstackTags,
    children
  }: ExperienceCardProps) => (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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
      {/* Image */}
      <img
        src={`${baseURL}${image}`}
        alt={company}
        sx={{
          width: `100%`,
          height: `auto`,
          borderRadius: `lg`,
        }}
      />
      
      {/* Company and Description */}
      <div sx={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        <div
          sx={{
            textTransform: `uppercase`,
            letterSpacing: `wide`,
            pt: 4,
            pb: 2,
            fontSize: [3, 4, 5],
            fontWeight: `medium`,
            lineHeight: 1.125,
          }}
        >
          {company}
        </div>
  
        <div
          sx={{
            opacity: 0.85,
            textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
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
      <div sx={{ mt: 4 }}>
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
  