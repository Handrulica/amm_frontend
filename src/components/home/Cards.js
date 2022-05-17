import { Box } from "@mui/system"
import Card from "../common/Card"

const Cards = ({headers, tables})=>{
    return (
        <Box mt={'10rem'} display={'flex'} justifyContent={'space-evenly'}>
        {headers.map((h,idx)=>(
            <Card key={'Card' + idx} header={h} table={tables[idx]}/>
        ))}
        </Box>
    )
}

export default Cards