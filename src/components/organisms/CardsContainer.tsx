import {  Row, Stack } from "react-bootstrap";
import AnalyticsCard from "../molecules/AnalyticsCard";

export default function CardsContainer() {
  return(
    <>
    <Stack direction="horizontal" gap={1} >
      <Row className='py-3'>        
        <AnalyticsCard progressPercent={23} cardTitle="Wellness Visit"></AnalyticsCard>
        <AnalyticsCard progressPercent={40}  cardTitle="Wellness Visit"></AnalyticsCard>
        <AnalyticsCard progressPercent={50}  cardTitle="Wellness Visit"></AnalyticsCard>
        <AnalyticsCard progressPercent={45}  cardTitle="Wellness Visit"></AnalyticsCard>
        <AnalyticsCard progressPercent={90}  cardTitle="Wellness Visit"></AnalyticsCard>
        <AnalyticsCard progressPercent={10}  cardTitle="Wellness Visit"></AnalyticsCard>
        <AnalyticsCard progressPercent={5}  cardTitle="Wellness Visit"></AnalyticsCard>        
      </Row>
      </Stack>
    </>
  )
}