import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ChatRounded from "@mui/icons-material/ChatRounded";
import JavascriptIcon from "@mui/icons-material/Javascript";
import VrpanoIcon from "@mui/icons-material/Vrpano";
export default function HomePage() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box p={2}>
          <Typography variant="h4" fontWeight="bold">
            Text Generation
          </Typography>
          <Link to="/summary">
            <Card
              sx={{
                boxShadow: 2,
                borderRadius: 5,
                height: 190,
                width: 200,
                "&:hover": {
                  border: 2,
                  boxShadow: 0,
                  borderColor: "primary.dark",
                  cursor: "pointer",
                },
              }}
            >
              <DescriptionIcon
                sx={{ fontSize: 100, color: "primary.main", mt: 2, ml: 2 }}
              />
              <Stack p={3} pt={0}>
                <Typography variant="h5" fontWeight="bold">
                  TEXT SUMMARY
                </Typography>
                <Typography variant="h6">Get Summary</Typography>
              </Stack>
            </Card>
          </Link>
        </Box>
        <Box p={2}>
          <Typography variant="h4" fontWeight="bold">
            ParaGraph Generation
          </Typography>
          <Link to="/paragraph">
            <Card
              sx={{
                boxShadow: 2,
                borderRadius: 5,
                height: 190,
                width: 200,
                "&:hover": {
                  border: 2,
                  boxShadow: 0,
                  borderColor: "primary.dark",
                  cursor: "pointer",
                },
              }}
            >
              <FormatAlignLeftIcon
                sx={{ fontSize: 100, color: "primary.main", mt: 2, ml: 2 }}
              />
              <Stack p={3} pt={0}>
                <Typography variant="h5" fontWeight="bold">
                  Paragraph
                </Typography>
                <Typography variant="h6">Get Paragraph </Typography>
              </Stack>
            </Card>
          </Link>
        </Box>
        <Box p={2}>
          <Typography variant="h4" fontWeight="bold">
            AI CHATBOT
          </Typography>
          <Link to="/chatbot">
            <Card
              sx={{
                boxShadow: 2,
                borderRadius: 5,
                height: 190,
                width: 200,
                "&:hover": {
                  border: 2,
                  boxShadow: 0,
                  borderColor: "primary.dark",
                  cursor: "pointer",
                },
              }}
            >
              <ChatRounded
                sx={{ fontSize: 100, color: "primary.main", mt: 2, ml: 2 }}
              />
              <Stack p={3} pt={0}>
                <Typography variant="h5" fontWeight="bold">
                  Chatbot
                </Typography>
                <Typography variant="h6">Chat with bot </Typography>
              </Stack>
            </Card>
          </Link>
        </Box>
        <Box p={2}>
          <Typography variant="h4" fontWeight="bold">
            Javascript Converter
          </Typography>
          <Link to="/jsconverter">
            <Card
              sx={{
                boxShadow: 2,
                borderRadius: 5,
                height: 190,
                width: 200,
                "&:hover": {
                  border: 2,
                  boxShadow: 0,
                  borderColor: "primary.dark",
                  cursor: "pointer",
                },
              }}
            >
              <JavascriptIcon
                sx={{ fontSize: 100, color: "primary.main", mt: 2, ml: 2 }}
              />
              <Stack p={3} pt={0}>
                <Typography variant="h5" fontWeight="bold">
                  JS Converter
                </Typography>
                <Typography variant="h6">Get Your JS code </Typography>
              </Stack>
            </Card>
          </Link>
        </Box>
        <Box p={2}>
          <Typography variant="h4" fontWeight="bold">
            AI SCIFI Images
          </Typography>
          <Link to="/scifi-image">
            <Card
              sx={{
                boxShadow: 2,
                borderRadius: 5,
                height: 190,
                width: 200,
                "&:hover": {
                  border: 2,
                  boxShadow: 0,
                  borderColor: "primary.dark",
                  cursor: "pointer",
                },
              }}
            >
              <VrpanoIcon
                sx={{ fontSize: 100, color: "primary.main", mt: 2, ml: 2 }}
              />
              <Stack p={3} pt={0}>
                <Typography variant="h5" fontWeight="bold">
                  Scifi Image
                </Typography>
                <Typography variant="h6">Generate Scifi images </Typography>
              </Stack>
            </Card>
          </Link>
        </Box>
      </Box>
    </>
  );
}
