import { Box, Container, Typography } from "@mui/material";
import data from "../data/testimonial.json";

import CustomerImage from "../assets/tesla.png";

import Logo1 from "../assets/Logo1.png";
import Logo2 from "../assets/Logo2.png";
import Logo3 from "../assets/Logo3.png";
import Logo4 from "../assets/Logo4.png";
import Logo5 from "../assets/Logo5.png";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

const TestimonialSection = () => {
  return (
    <Box sx={{ backgroundColor: "background.default", py: 10 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            flexWrap: { xs: "wrap", md: "nowrap" }
          }}
        >
          {/* LEFT IMAGE */}
          <Box
            component="img"
            src={CustomerImage}
            alt={data.imageAlt}
            sx={{
              width: 320,
              borderRadius: 3,
              boxShadow: "0px 8px 24px rgba(0,0,0,0.1)"
            }}
          />

          {/* RIGHT CONTENT */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, lineHeight: 1.8 }}
            >
              {data.description}
            </Typography>

            <Typography
              variant="subtitle1"
              fontWeight={700}
              color="primary.main"
              sx={{ mb: 0.5 }}
            >
              {data.name}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3 }}
            >
              {data.designation}
            </Typography>

            {/* Logos + CTA */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                flexWrap: "wrap"
              }}
            >
              {logos.map((logo, index) => (
                <Box
                  key={index}
                  component="img"
                  src={logo}
                  alt="client logo"
                  sx={{ height: 28 }}
                />
              ))}

              <Typography
                variant="body2"
                color="primary.main"
                sx={{
                  fontWeight: 600,
                  cursor: "pointer",
                  ml: 2
                }}
              >
                {data.cta} →
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSection;