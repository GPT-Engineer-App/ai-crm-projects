import React, { useState } from "react";
import { Box, Heading, Input, Button, Stack, Text, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { FaPlus, FaArrowUp, FaArrowDown, FaTrash } from "react-icons/fa";

const Index = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState("");

  const addProject = () => {
    if (newProject.trim() !== "") {
      setProjects([...projects, { name: newProject, priority: projects.length }]);
      setNewProject("");
    }
  };

  const deleteProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const changePriority = (index, change) => {
    const newProjects = [...projects];
    const temp = newProjects[index];
    newProjects[index] = newProjects[index + change];
    newProjects[index + change] = temp;
    setProjects(newProjects);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        AI Project CRM
      </Heading>
      <Flex mb={4}>
        <Input value={newProject} onChange={(e) => setNewProject(e.target.value)} placeholder="Enter a new project" mr={2} />
        <Button leftIcon={<FaPlus />} onClick={addProject}>
          Add Project
        </Button>
      </Flex>
      <Stack spacing={4}>
        {projects.map((project, index) => (
          <Flex key={index} alignItems="center">
            <Text>{project.name}</Text>
            <Spacer />
            <IconButton icon={<FaArrowUp />} onClick={() => changePriority(index, -1)} isDisabled={index === 0} aria-label="Move up" mr={2} />
            <IconButton icon={<FaArrowDown />} onClick={() => changePriority(index, 1)} isDisabled={index === projects.length - 1} aria-label="Move down" mr={2} />
            <IconButton icon={<FaTrash />} onClick={() => deleteProject(index)} aria-label="Delete project" />
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};

export default Index;
