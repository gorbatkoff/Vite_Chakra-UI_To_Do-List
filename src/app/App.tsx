import './App.css'
import {Box, Heading, useTheme} from "@chakra-ui/react";
import {useState} from "react";
import {Header} from "/src/widgets/Header";
import {Content} from "/src/widgets/Content/Content";

type themes = "light" | "night";

function App() {

    const [currentTheme, setCurrentTheme] = useState<themes>("night");
    const theme = useTheme()[currentTheme];

    return (
        <Box className={"App"} bg={theme.brand['900']} w='100%' p={5} color={theme.brand['100']}>
            <Header/>
            <Content/>
        </Box>
    )
}

export default App
