import { Grid, GridItem, Card, CardBody, Image, Stack, Text, Divider, CardFooter, Button, ButtonGroup, HStack } from "@chakra-ui/react";
import Description from "./Description";
import ListingCard from "../../../components/ListingCard";
function ProfileSection(props) {

    const profileItems = 
        {
            userId: "Number",
            name: "Name",
            description: "Pull from DB pls. I will do just need to mock it up first",

        }

    const items = [
        {
            title: "Living Room Sofa",
            price: "$450",
            description:
            "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
            getImageSrc: () => require("../../../media/anything.jpg"),
            favourited: true,
            buyer: false,
        },
        {
            title: "Living Room Sofa",
            price: "$450",
            description:
                "This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.",
            getImageSrc: () => require("../../../media/anything.jpg"),
            favourited: true,
            buyer: false,
        },
    ]   
    return(
        <>
        <Grid
            templateAreas={`"nav main"
                            "nav main"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h='800px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
            >
            <GridItem pl='3' bg='white.300' area={'nav'}>
                <Description
                name = {profileItems.name}
                description = {profileItems.description}/>
            </GridItem>
            <GridItem pl='3' bg='white.300' area={'main'}>
            <HStack>
                {items.map((item) => (
                    <ListingCard
                        key = {item.title}
                        title = {item.title}
                        price = {item.price}
                        description = {item.description}
                        imageSrc={item.getImageSrc()}
                        favourited = {item.favourited}
                        buyer={item.buyer}
                    />
                ))}
            </HStack>
            </GridItem>
        </Grid>
        
        </>
    )
}

export default ProfileSection;