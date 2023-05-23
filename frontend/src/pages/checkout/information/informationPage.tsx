import { Flex } from "@mantine/core";
import BreadcrumbsComponent from "./breadcrumbsComponent";
import InfomationForm from "./informationForm";


function InformationPage(){
    return(
    <div style={{display:"flex", justifyContent: "center", alignItems: "center" }}>    
    <Flex
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        w={900}>
        <BreadcrumbsComponent />
        <InfomationForm/>
    </Flex>
    </div>
    );

}

export default InformationPage;