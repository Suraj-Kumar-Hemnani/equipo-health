import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Chart from '../atoms/Chart';

type AnalyticsCardProps = {
  cardTitle: string,
  progressPercent: number
}

export default function AnalyticsCard({cardTitle, progressPercent}: AnalyticsCardProps) {
  return(
    <Col>
      <ChartContainer>
        <Chart value={progressPercent} label={"Health"} color='#7DB059'></Chart>
        <p style={{margin: '10px 0'}}>{cardTitle}</p>
      </ChartContainer> 
    </Col>   
  )
}

const ChartContainer = styled.div`
  padding: 15px 30px;
  box-shadow: 0px -4px 10px -6px #ececec;
  border: 1px solid #ececec;
  max-width: 180px;
  margin: 15px 0;

  &:hover{
    box-shadow: 8px 9px 15px -7px #ececec;
  }
`;