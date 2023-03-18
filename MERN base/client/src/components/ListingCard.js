import { Card, CardBody, Image, Stack, Text, Divider, CardFooter, Button, ButtonGroup, Heading } from "@chakra-ui/react";
// insert buyer page here
// insert favourites page
function ListingCard(props) {
    return(
        <>
        <Card maxW='sm'>
            <CardBody>
                <Image
                src={props.imageSrc}
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{props.title}</Heading>
                <Text>
                    {props.description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    {props.price}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Chat with buyer
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Add to Favourites
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
        </>
    )
}

export default ListingCard;