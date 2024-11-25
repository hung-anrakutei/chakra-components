import { Box, Heading, Tabs } from "@chakra-ui/react"
import { LuCheckSquare, LuFolder, LuUser } from "react-icons/lu"
import General from "./components/General";

const Settings = () => {
 
  return (
    <Box bg="bg" p={4} borderRadius={"xl"}>
    <Heading as="h3" fontSize="2xl" fontWeight="bold" pb={5}>
      Settings
    </Heading>
    <Tabs.Root defaultValue="general">
    <Tabs.List>
      <Tabs.Trigger value="general">
        <LuCheckSquare />
        General
      </Tabs.Trigger>
      <Tabs.Trigger value="plan">
        <LuFolder />
        Plan
      </Tabs.Trigger>
      <Tabs.Trigger value="profile">
        <LuUser />
        Profile
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="general">
        <General />
    </Tabs.Content>
    <Tabs.Content value="plan">Manage your projects</Tabs.Content>
    <Tabs.Content value="profile">
      Manage your tasks for freelancers
    </Tabs.Content>
  </Tabs.Root>
  </Box>
  );
};

export default Settings;
