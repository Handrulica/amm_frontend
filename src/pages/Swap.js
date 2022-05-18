import {
    Box,
    FormControl,
    MenuItem,
    Paper,
    ThemeProvider,
    Typography,
} from "@mui/material";
import React from "react";
import { STR } from "../helpers";
import defaultTheme from "../styling/defaultTheme";
import {
    CustomSelect,
    MainBoxContainerStyle,
    mainContainerStyle,
    RootBoxContainerStyle,
    TextField_Select_ContainerStyle,
    WhiteBorderTextField,
} from "../styling/Swap/SwapStyledComponents";

function Swap({ options }) {
    const [from, setFrom] = React.useState(options[0]);
    const [to, setTo] = React.useState(options[1]);
    const [fromValue, setFromValue] = React.useState(-1)
    // const [toValue, setToValue] = React.useState(-1)

    const handleFromChange = (e) => {
        setFrom(e.target.value);
        if (e.target.value === to)
            setTo(options.filter((o) => o !== e.target.value)[0]);
    };
    const handleToChange = (e) => {
        setTo(e.target.value);
        if (e.target.value === from)
            setFrom(options.filter((o) => o !== e.target.value)[0]);
    };

    const handleFromInput = e => {
        let x = fromValue
        if (!isNaN(e.target.value))
            x = e.target.value
        setFromValue(x)
    }
    // const handleToInput = e => {
    //     let x = toValue
    //     if (!isNaN(e.target.value))
    //         x = e.target.value
    //     setToValue(x)
    // }
    return (
        <Paper sx={mainContainerStyle}>
            <ThemeProvider theme={defaultTheme}>
                <Typography
                    color={defaultTheme.palette.defaultWhite.main}
                    m={"1rem auto"}
                    mt={".5rem"}
                    fontWeight={"300"}
                    variant="h4"
                >
                    Swap
                </Typography>
                <Box
                    m={"auto 2rem"}
                    sx={MainBoxContainerStyle}
                >
                    <Box sx={RootBoxContainerStyle} m={'.5rem 0'}>
                        <Box sx={TextField_Select_ContainerStyle} m={".5rem 0"}>
                            <WhiteBorderTextField
                                onChange={handleFromInput}
                                fullWidth
                                placeholder="0.0"
                                inputMode="number"
                            />
                            <FormControl>
                                <CustomSelect
                                    value={from}
                                    sx={{ width: "fit-content", marginRight: "1rem" }}
                                    onChange={handleFromChange}
                                    size="small"
                                >
                                    {options.map((o, idx) => (
                                        <MenuItem key={'select1-' + idx} value={o}>{o.abbreviation}</MenuItem>
                                    ))}
                                </CustomSelect>
                            </FormControl>
                        </Box>
                        <Typography hidden={fromValue <= 0} fontFamily={"'Inconsolata', monospace"} fontWeight={'400'} m={'auto'} ml={'1.25rem'} mt={'.5rem'} color={defaultTheme.palette.primary.light} variant="h6">
                            {'$' + (STR(1, from.hzn, fromValue) * 5).toFixed(5)}</Typography>
                    </Box>
                    <Box sx={RootBoxContainerStyle} m={'.5rem 0'}>
                        <Box
                            sx={TextField_Select_ContainerStyle}
                            m={".5rem 0"}
                        >
                            <WhiteBorderTextField
                                // onChange={handleToInput}
                                fullWidth
                                InputProps={{
                                    readOnly: true
                                }}
                                value={fromValue > 0 ? (STR(to.hzn, 1, STR(1, from.hzn, fromValue)).toFixed(5)) : '0.0'}
                                placeholder="0.0"
                                inputMode={"number"}
                            />
                            <FormControl>
                                <CustomSelect
                                    value={to}
                                    sx={{ width: "fit-content", marginRight: "1rem" }}
                                    size="small"
                                    onChange={handleToChange}
                                >
                                    {options.map((o, idx) => (
                                        <MenuItem key={'select2-' + idx} value={o}>{o.abbreviation}</MenuItem>
                                    ))}
                                </CustomSelect>
                            </FormControl>
                        </Box>
                        <Typography hidden={fromValue <= 0} fontFamily={"'Inconsolata', monospace"} fontWeight={'400'} m={'auto'} ml={'1.25rem'} mt={'.5rem'} color={defaultTheme.palette.primary.light} variant="h6">
                            {'$' + (STR(to.hzn, 1, STR(1, from.hzn, fromValue)) * to.usd).toFixed(5) + ' (' + ((STR(1, from.hzn, fromValue) * from.usd) / (STR(to.hzn, 1, STR(1, from.hzn, fromValue)) * to.usd)).toFixed(3) + '%)'}</Typography>
                    </Box>
                </Box>
            </ThemeProvider>
        </Paper>
    );
}

export default Swap;
