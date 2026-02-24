import {
  Box,
  Button,
  Input,
  Text,
  Title,
  Flex,
  useMantineTheme,
} from "@mantine/core";
import { useForm, isEmail } from "@mantine/form";
import { useState } from "react";
import { theme } from "../theme/theme";

function Newsletter() {
  const mantineTheme = useMantineTheme();
  const [successMessage, setSuccessMessage] = useState("");

  const form = useForm({
    initialValues: { email: "" },
    validate: {
      email: isEmail("Please enter a valid email"),
    },
  });

  const handleSubmit = () => {
    setSuccessMessage("Successfully subscribed!");
    form.reset();
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <Box
      bg={theme.other.peachLight}
      py={{ base: 60, md: 80, lg: 100 }}
      px={{ base: 20, md: 40, lg: 50 }}
    >
      <Box maw={600} mx="auto">
        <Text
          c={mantineTheme.other.green}
          mb={12}
          size="sm"
          fw={600}
          ta="center"
        >
          Newsletter
        </Text>

        <Title order={2} mb={20} fw={700} c={theme.other.navy} ta="center">
          Watch our Courses
        </Title>

        <Text
          mb={40}
          c={mantineTheme.other.gray}
          size="sm"
          lh={1.6}
          ta="center"
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </Text>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Flex gap={0}>
            <Input
              placeholder="Enter your email"
              size="md"
              radius="md"
              style={{ flex: 1 }}
              {...form.getInputProps("email")}
              styles={{
                input: {
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderColor: theme.other.gray,
                  "&:focus": {
                    borderColor: theme.other.green,
                  },
                },
              }}
            />

            <Button
              type="submit"
              size="md"
              radius="md"
              bg={theme.other.green}
              c="white"
              styles={{
                root: {
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                },
              }}
            >
              Subscribe
            </Button>
          </Flex>

          {form.errors.email && (
            <Text c="red" size="xs" mt={6}>
              {form.errors.email}
            </Text>
          )}

          {successMessage && (
            <Text c="green" size="xs" mt={8} fw={500} ta="center">
              {successMessage}
            </Text>
          )}
        </form>
      </Box>
    </Box>
  );
}

export default Newsletter;
