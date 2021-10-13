import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Logo from '../logo/logo';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function Header() {
    return (
        <Grid sx={{ borderTop: '2px dashed grey', padding: "10px", }} container direction="row" justifyContent="space-between" >
            <Logo></Logo>
            <TextField sx={{ width: "30%" }} placeholder="Find items, users and activities" variant="outlined" InputProps={{
                startAdornment: (
                    < InputAdornment position="start" >
                        <SearchIcon color="primary" />
                    </InputAdornment>
                )
            }} />
            <div>
                <Button variant='text'>Home</Button>
                <Button variant='text'>Activity</Button>
                <Button variant="contained">Explore</Button>
            </div >
        </Grid >
    );
}