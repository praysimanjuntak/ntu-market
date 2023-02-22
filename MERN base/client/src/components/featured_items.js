import React from "react";
import { SimpleGrid, Card, Box, Text, Heading, GridItem, CardBody, CardFooter, Image, VStack, HStack, Avatar, Divider} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import iphone from '../media/iphone.png'

function FeaturedItems() {
    return(
        <center>
            <Heading mb={4} size={['lg']}>Featured</Heading>
            <Divider width='40%'/>
            <SimpleGrid
                maxWidth='90vw'
               // templateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(5,1fr)']}
                mt='1.5em'
                mb='1em'
                minChildWidth="30%"
                gap={6}
            >
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
                <GridItem>
                    <a href="">
                        <Card>
                            <CardBody display='flex' flexDirection='column' alignItems='center'>
                                <Image src={iphone} h='8em' w='8em' mb='5'></Image>
                                <VStack display='flex' alignItems='flex-start'>
                                    <Heading size='xs'>Iphone 14 Pro 256GB</Heading>
                                    <HStack spacing={5} display='flex' align='center'>
                                        <Heading size='sm' color='#e75425'>$1269</Heading>
                                        <Text fontSize='xs' color='grey'>Brand New</Text>
                                        <StarIcon size='1em' color='#3c3c3c'></StarIcon>
                                    </HStack>
                                    <HStack>
                                        <Avatar size='xs'></Avatar>
                                        <Text fontSize='xs' color='grey'>Username1234</Text>
                                    </HStack>                                  
                                </VStack>
                            </CardBody>
                        </Card>
                    </a>
                </GridItem>
            </SimpleGrid>
        </center>
    )
}
export default FeaturedItems;