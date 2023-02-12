import { useEffect, useState } from 'react';
import RevolutCheckout from '@revolut/checkout'
import { useLocation } from 'react-router-dom';
import { getData } from "country-list";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Button, InputAdornment, FormControl, InputLabel, Input, Container, Select, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const theme = createTheme();

const CheckoutPage = () => {
    // Use Location
    const location = useLocation();

    // States
    const [price, setPrice] = useState(0);
    const [billingAddress, setBillingAddress] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setPrice(params.get("price"));
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <Box sx={{ '& > :not(style)': { m: 2 } }}>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="input-name">Name</InputLabel>
                            <Input
                                id="input-name"
                                startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>}
                            />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="input-email">Email</InputLabel>
                            <Input
                                id="input-email"
                                startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>}
                            />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="input-phone">Phone</InputLabel>
                            <Input
                                id="input-phone"
                                startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>}
                            />
                        </FormControl>

                        {/* <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-name-label">Billing Address</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={billingAddress}
                                onChange={(e) => setBillingAddress}
                            >
                                {getData().map(country => (
                                    <MenuItem
                                        value={country.code}
                                        key={country.code}
                                    >
                                        {country.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl> */}
                        <Box>
                            <Button variant="outlined" size='small'>Checkout</Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    );
}

// export async function getServerSideProps({query, req}) {
//     const baseUrl = `http://${req.headers.host}`;

//     const response = await fetch(`${baseUrl}/api/orders/${query.order}`);
//     const order = response.ok ? await response.json() : null;

//     return {
//         props: {
//             order
//         }
//     };
// }

export default CheckoutPage;
