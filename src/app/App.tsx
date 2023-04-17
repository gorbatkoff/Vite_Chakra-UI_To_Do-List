import './App.css'
import {Box} from "@chakra-ui/react";
import {Header} from "/src/widgets/Header";
import {Content} from "/src/widgets/Content/Content";

function App() {

    return (
        <Box className={"App"} p={5}>
            <Header/>
            <Content/>
        </Box>
    )
}

export default App
