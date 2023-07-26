import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
interface Props {
  title?: string;
  description?: string;
  price?: number;
  image_url?: any;
  onClick?: () => void;
}
export default function Cards({
  title,
  description,
  price,
  image_url,
  onClick,
}: Props) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image_url} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" onClick={onClick}>
            Buy now
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
