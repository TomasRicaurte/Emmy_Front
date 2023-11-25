import "./Home.css";
import {
  Box,
  Button,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <>
      <Box
        className="Barra"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        bgColor="#9B78B4"
        // opacity='20%'
        w="auto"
        h="100px"
      >
        <Button boxSize="90px" variant="link">
          <Image
            className="left"
            src=".\src\Imagenes\Logo_Emmy.png"
            borderRadius="50px"
            alt="Logo Emmy_Lanitas"
          ></Image>
        </Button>
        <Box
          className="center"
          display="flex"
          justifyContent="space-between"
          w="600px"
        >
          <Button variant="link">
            <Text className="BotonR" color="white" fontSize="lg">
              RAMOS
            </Text>
          </Button>
          <Button variant="link">
            <Text className="BotonA" color="white" fontSize="md">
              AMIGURUMIS
            </Text>
          </Button>
          <Button variant="link">
            <Text className="BotonP" color="white" fontSize="sm">
              PERSONALIZADOS
            </Text>
          </Button>
          <Button variant="link">
            <Text className="BotonC" color="white" fontSize="xl">
              CLIENTES
            </Text>
          </Button>
        </Box>
        <Box className="right">
          <Menu>
            <MenuButton>
              <IconButton
                icon={<ChatIcon />}
                bg="none"
                color="white"
                size="lg"
              />
            </MenuButton>
            <MenuList bg="#9B78B4">
              <MenuItem
                icon={<FaWhatsapp size="20px" color="white" />}
                bg="#9B78B4"
              >
                <Text as="b" color="white">
                  WhatsApp
                </Text>
              </MenuItem>
              <MenuItem
                icon={<FaInstagram size="20px" color="white" />}
                bg="#9B78B4"
              >
                <Text as="b" color="white">
                  Instagram
                </Text>
              </MenuItem>
              <MenuItem
                icon={<FaTiktok size="20px" color="white" />}
                bg="#9B78B4"
              >
                <Text as="b" color="white">
                  TikTok
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Box className="Imagenes">
        <Image />
      </Box>
    </>
  );
}
export default Home;
