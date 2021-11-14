import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Logo from '../logo/Logo.jsx';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

export default function Header() {
    return (
        <Grid container
            sx={{ backgroundColor: "#181828", height: "80px", alignItems: "center", paddingX: "5%" }}
            direction="row"
            justifyContent="space-between">
            <Grid item xs={2}>
                <Logo></Logo>
            </Grid>
            <Grid item xs={5}>
                <TextField  fullWidth placeholder="Find items, users and activities" sx={{ div: { backgroundColor: 'rgb(24, 24,40)' } }}  variant="outlined" InputProps={{                  
                    startAdornment: (
                        < InputAdornment position="start" color="secondary" >
                            <SearchIcon color="primary" />
                        </InputAdornment>
                    )
                }} />
            </Grid>
            <Grid item xs container
                direction="row"
                justifyContent="flex-end"
                alignItems="center">

                <Button variant='text' sx={{color: "white"}}>Home</Button>
                <Button variant='text' sx={{color: "white"}}>Activity</Button>
                <Button variant="contained">Explore</Button>
            </Grid>
        </Grid >
    );
}