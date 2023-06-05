import { Flex } from "@mantine/core";
import BreadcrumbsComponent from "./breadcrumbsComponent";
import InfomationForm from "./informationForm";

type StepperProps = {
    activeStep: number;
    onStepChange: (nextStep: number) => void;
  };

const InformationPage: React.FC< StepperProps> = ({onStepChange, activeStep})=>{
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
        <InfomationForm activeStep={activeStep} onStepChange={onStepChange}/>
        
    </Flex>
    </div>
    );

}

export default InformationPage;