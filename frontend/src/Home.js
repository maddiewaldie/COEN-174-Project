import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as Linker} from 'react-router-dom'
import Sidebar from './UserInfoView/Sidebar';
import './Home.css';

const theme = createTheme();
const Home = () => {
    return (
      <section class="main">
        <section class="sidebar" id="sidebar">
                <Sidebar />
        </section>
          <Box sx={{ my: 4 }}>
            <section class="header" id="header">
            <Typography variant="h4" component="h1" gutterBottom>
              Goal Tracker App
            </Typography>
            </section>
            <div style={{  
              display: "grid",  
              gridTemplateColumns: "1fr 1fr"  
              }}>
              <section class="cards" id="Cards">
                <section class="todoCard" id="todoCard">
                  <Card sx={{ maxWidth: 345 }} raised="true">
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        To Do's
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        View all of your goals and to do’s here!
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Linker to={'/TaskPage'}>
                        <Button size="small">
                          See To Do's
                        </Button>
                      </Linker>
                    </CardActions>
                  </Card>
                </section>
                <section class="progressCard" id="progressCard">
                  <Card sx={{ maxWidth: 345 }} raised="true">
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Progress Tracker
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      View your progress toward your goals here!
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Linker to={'/progresstracker'}>
                        <Button size="small">
                          See Progress Tracker
                        </Button>
                      </Linker>
                    </CardActions>
                  </Card>
                </section>
              </section>
            </div>
          </Box>
        </section>
    );
  };

export default Home;