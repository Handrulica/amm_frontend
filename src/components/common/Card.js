import { Box, Button, Paper, Typography } from "@mui/material"
import defaultTheme from "../../styling/defaultTheme"

const Card = ({header, table}) =>{
    return (
        <Paper sx={{display:'flex', flexDirection:'column',maxWidth:'33%',p:'1rem', border:'2px solid',borderColor:defaultTheme.palette.secondary.main}}>
            <Typography align="center" variant="h3" fontWeight={300}>{header}</Typography>
            <Box m={'1rem'} display={'flex'} flexDirection={'column'}>
                {table.table.map((row,idx)=>(
                    <Box key={header + '-table-row' + idx} display={'flex'} justifyContent={'space-between'}>
                        <Typography fontWeight={100} alignSelf={'flex-start'} m={'auto'} mr='.5rem' ml={'0'} variant="h4" color={'gray'}>{row.row.key}: </Typography>
                        <Typography fontWeight={100} alignSelf={'flex-end'} m={'auto'} ml='.5rem' mr={'0'} variant="h4" color={'gray'}>{row.row.value}</Typography>
                    </Box>
                ))}
            </Box>
            <Button size="large" color='mainGreen' sx={{alignSelf:'center'}} variant="outlined" >BUY</Button>
        </Paper>
    )
}

export default Card