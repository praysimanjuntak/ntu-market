import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  InputRightElement,
  InputGroup,
  Show,
  Hide,
  Image,
  Center,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, Search2Icon, BellIcon, EmailIcon, StarIcon } from '@chakra-ui/icons';
import cart from '../media/shopping-cart.png'



function Navbar() {

  return (
      <>
      <Box bg={'#181C62'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Show above='766px'>
              <Box>
                  <img src={cart} alt="NTU Marketplace" height={50} width={50} />
              </Box>
             </Show>
             <Show below='766px'>          
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <HamburgerIcon color='white' h={'1.5em'} w={'1.5em'} ></HamburgerIcon>
                </MenuButton>
                <MenuList>
                  <MenuItem minH='48px'>
                    <Image
                      boxSize='4rem'
                      borderRadius='full'
                      src='https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                      alt='Profile Picture'
                      mr='12px'
                    />
                    <span>Hey there, Monica!</span>
                  </MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>My Profile</MenuItem>
                  <MenuItem>My Wallet</MenuItem>
                  <MenuDivider />
                  <MenuItem>Sign Out</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Show>  
              

              <InputGroup m={4} >
                  <InputRightElement 
                      pointerEvents='none'
                      children={<Search2Icon color='white'/>}
                  />
                  <Show above='620px'>
                    <Input bg='#343769' variant='filled' placeholder='Find the items you want'/>
                  </Show>    
                  <Show below='620px'>
                    <Input bg='#343769' textAlign='center' variant='filled' placeholder='Search'/>
                  </Show> 
              </InputGroup>
              
              <Hide below='766px'>
                <HStack spacing={4} margin={4}>
                  <a href="http://">
                    <Text color='white'>Notifications</Text>
                  </a>
                  <a href="http://">
                  <Text color='white'>Messages</Text>
                  </a>
                  <a href="http://">
                  <Text color='white'>Wishlist</Text>
                  </a>
                </HStack>
              </Hide>
              <Show below='766px'>
                <HStack spacing={5} align={'center'}>
                  <a href="">
                    <BellIcon color={'white'} h={'1.5em'} w={'1.5em'}/>
                  </a>
                  <a href="">
                    <EmailIcon color={'white'} h={'1.5em'} w={'1.5em'}/>
                  </a>
                  <a href="">
                    <StarIcon color={'white'} h={'1.2em'} w={'1.2em'}/>
                  </a>
                </HStack>
              </Show>
          <Show above='766px'>          
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>My Profile</MenuItem>
                  <MenuItem>My Wallet</MenuItem>
                  <MenuDivider />
                  <MenuItem>Sign Out</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Show>  
        </Flex>
      </Box>
    </>
  );
}
export default Navbar;