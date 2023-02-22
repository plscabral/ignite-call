import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { ConnectBox, ConnectItem } from './styles'
import { ArrowRight } from 'phosphor-react'
// import { api } from '@/src/lib/axios'

export default function ConnectCalendar() {
  // async function handleRegister(data: any) {
  //   console.log(data)
  // }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>

            <Button variant="secondary" size="sm">
              Conectar
              <ArrowRight />
            </Button>
          </ConnectItem>

          <Button type="submit">
            Próximo passo
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Header>
    </Container>
  )
}
