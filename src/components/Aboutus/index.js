import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Paper, useTheme, useMediaQuery } from '@mui/material';

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ my: 4, p: isMobile ? 2 : 4, bgcolor: '#f9f9f9', borderRadius: 1, boxShadow: 1 }}>
      <Box textAlign="center" mb={isMobile ? 2 : 4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to FreshTo
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Typography variant="body1" paragraph>
          At FreshTo, we're passionate about delivering the freshest fruits, groceries, and milk right to your doorstep. Our goal is to make healthy living easy and convenient for everyone.
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          We started FreshTo with a simple idea: to provide our customers with the best quality products, sourced from local farmers and suppliers, and delivered to their doorstep with a smile. We believe in the importance of healthy eating and want to make it accessible to everyone.
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Services
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary="Fresh Fruits and Groceries"
              secondary="We source our products from local farmers and suppliers to ensure that they are fresh and of the highest quality."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Pure Milk Subscription"
              secondary="Our milk is sourced from local dairy farms and is delivered to your doorstep on a subscription basis. Choose from 1, 7, or 30-day subscriptions."
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary="Convenient Delivery"
              secondary="We deliver to your doorstep, so you can enjoy the convenience of having fresh products at your fingertips."
            />
          </ListItem>
        </List>
        <Typography variant="h4" component="h2" gutterBottom>
          How it Works
        </Typography>
        <List component="ol">
          <ListItem disableGutters component="li">
            <Typography variant="body1">
              Sign up for our subscription service and choose your preferred plan.
            </Typography>
          </ListItem>
          <ListItem disableGutters component="li">
            <Typography variant="body1">
              Receive an OTP (One-Time Password) to verify your subscription.
            </Typography>
          </ListItem>
          <ListItem disableGutters component="li">
            <Typography variant="body1">
              Visit your nearest milk center and show your OTP to collect your milk.
            </Typography>
          </ListItem>
        </List>
        <Typography variant="h4" component="h2" gutterBottom>
          Why Choose FreshTo?
        </Typography>
        <List>
          <ListItem disableGutters>
            <ListItemText primary="Fresh and high-quality products" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Convenient delivery to your doorstep" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Flexible subscription plans to suit your needs" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Support for local farmers and suppliers" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default AboutUs;
