import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Avatar,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import blogData from "../data/blogData.json";

const tagColors: Record<string, string> = {
  Product: "#E8F5E9",
  Community: "#E3F2FD",
  Design: "#F3E5F5",
  Marketing: "#FFF3E0",
  Engineering: "#FCE4EC",
};

const Blog = () => {
  const { categories, featured, posts } = blogData;

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      
      {/* HERO */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #F8FFF8 0%, #F0FAF0 60%, #E8F5E9 100%)",
          py: { xs: 8, md: 10 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Stories, tips &{" "}
            <Box component="span" sx={{ color: "#4CAF4F" }}>
              insights
            </Box>
          </Typography>

          <Typography sx={{ color: "#6C7281", mb: 4 }}>
            Stay up to date with the latest community building strategies.
          </Typography>

          {/* Centered Search */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              placeholder="Search articles..."
              sx={{
                width: "100%",
                maxWidth: 500,
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#9CA3AF" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* CONTENT */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        
        {/* Centered Categories */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
            mb: 6,
          }}
        >
          {categories.map((cat, index) => (
            <Chip
              key={cat}
              label={cat}
              sx={{
                backgroundColor: index === 0 ? "#4CAF4F" : "#F5F5F5",
                color: index === 0 ? "#fff" : "#6C7281",
              }}
            />
          ))}
        </Box>

        {/* FEATURED */}
        <Card
          sx={{
            mb: 6,
            borderRadius: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={featured.image}
            sx={{ width: { md: "45%" } }}
          />
          <CardContent>
            <Chip
              label={`Featured · ${featured.tag}`}
              sx={{ mb: 2 }}
            />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              {featured.title}
            </Typography>
            <Typography sx={{ mb: 3, color: "#6C7281" }}>
              {featured.excerpt}
            </Typography>
            <Button endIcon={<ArrowForwardIcon />}>
              Read Article
            </Button>
          </CardContent>
        </Card>

        {/* POSTS GRID */}
        <Grid container spacing={4} justifyContent="center">
          {posts.map((post, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ height: "100%", borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  image={post.image}
                  sx={{ height: 180 }}
                />
                <CardContent>
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>
                    {post.title}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: "#6C7281", mb: 2 }}>
                    {post.excerpt}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar
                      sx={{
                        width: 28,
                        height: 28,
                        backgroundColor: post.authorColor,
                        fontSize: 12,
                      }}
                    >
                      {post.authorInitials}
                    </Avatar>
                    <Typography sx={{ fontSize: 12 }}>
                      {post.author}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default Blog;