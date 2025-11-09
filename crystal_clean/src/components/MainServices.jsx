import { Box, Typography } from "@mui/material";
import ServiceSmallCard from "./ServiceSmallCard";

export default function MainServices() {

    return (
        <Box //main container
            sx={{
                width: '100%',
                minHeight: '400px',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',

            }}
        >
            <Box //alignment container
                sx={{
                    width: '80%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
            > 
                <Box //text info
                    sx={{
                        width: '50%',
                    }}
                >
                    <Typography 
                        variant="h2"
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        Our Prices
                    </Typography>
                    <Typography variant="h6">Details about main services will go here.</Typography>
                </Box> 
                <Box //price cards container
                    sx={{
                        width: '50%',
                    }}
                >
                    <ServiceSmallCard
                        title="Basic Cleaning"
                        price="$50"
                        link="/services/basic-cleaning"
                    />
                    <ServiceSmallCard
                        title="Deep Cleaning"
                        price="$150"
                        link="/services/deep-cleaning"
                    />
                    <ServiceSmallCard
                        title="Move-Out Cleaning"
                        price="$200"
                        link="/services/move-out-cleaning"
                    />
                </Box>
            </Box>
        </Box>
    )
}