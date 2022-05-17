import { Box, Typography } from "@mui/material";

export default function Title(){
    return (
        <Box marginTop={'10rem'} display={'flex'} sx={{flexFlow:'row', justifyContent:'space-evenly'}}>
          <Box>
        <Typography m={'auto'} width={'fit-content'} color="white" variant="h3" fontWeight={100}>
          Uniswap based AMM with
        </Typography>
        <Typography m={'auto'} width={'fit-content'} variant="h3" color="mainGreen.main" fontWeight={500}>
          real price data
        </Typography>
          </Box>
          <Box>
        <Typography m={'auto'} width={'fit-content'} variant="h3" fontWeight={100} color="white">
          to overcome
        </Typography>
        <Typography m={'auto'} width={'fit-content'} variant="h3" color="secondary" fontWeight={500}>
          impermanent loss
        </Typography>
          </Box>
      </Box>
    )
}